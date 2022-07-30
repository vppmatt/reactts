import './Transactions.css';
import {
    getAllCountries,
    getPaymentsForCountry,
    getPaymentsForOrder,
    PaymentType
} from "../../../data/DataFunctions";
import {ChangeEvent, useEffect, useState} from "react";
import TransactionTableRow from "./TransactionTableRow";
import {useNavigate, useSearchParams} from 'react-router-dom';
import CountriesSelector from "./CountriesSelector";

type TransactionsProps = { selectedOrderId: string };

const Transactions = (props: TransactionsProps) => {

    const [payments, setPayments] = useState<PaymentType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [searchParams, setSearchParams] = useSearchParams();
    const country = searchParams.get("country");
    const [countries, setCountries] = useState<string[]>(["--select--"]);
    const countryOptions: JSX.Element[] = countries.map(c => <option key={c} value={c}>{c}</option>);

    const [selectedCountry, setSelectedCountry] = useState<string>(country != null ? country : countries[0]);

    const navigate = useNavigate();

    const loadDataForCountry = (country: string) => {
        setLoading(true);
        setSearchParams({"country": country});
        getPaymentsForCountry(country)
            .then(response => {
                setPayments(response.data);
                setLoading(false);
                setSelectedCountry(response.data[0].country);
            })
            .catch(error => {
                console.log("something went wrong", error);
            });
    };

    const loadDataForOrder = (orderId: string) => {
        setLoading(true);
        getPaymentsForOrder(orderId)
            .then(response => {
                setLoading(false);
                setPayments(response.data);
                setSelectedCountry(response.data[0].country);
            })
            .catch(error => {
                console.log("something went wrong", error);
            });
    };

    useEffect(() => {
        if (props.selectedOrderId != "") {
            loadDataForOrder(props.selectedOrderId);
        }

    }, [props.selectedOrderId]);

    return (
        <div>
            {loading && <p className="loadingMessage">The data is loading please wait...</p>}

            <div>
                {props.selectedOrderId == "" &&  <CountriesSelector setSelectedCountry={loadDataForCountry} setLoaded={() => setLoading(false)}/>
                }
                <table className="transactionsTable">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payments.map(payment => payment.country === selectedCountry && TransactionTableRow(payment))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Transactions
