import './Transactions.css';
import {
    getAllPaymentsAxiosVersion, getAllPaymentsFetchVersion,
    PaymentType
} from "../../data/DataFunctionsBeforeTidyup";
import {ChangeEvent, useEffect, useState} from "react";
import TransactionTableRow from "./TransactionTableRow";

const Transactions = () => {

    const [payments, setPayments] = useState<PaymentType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const allPaymentCountries: string[] = payments.map(payment => payment.country);
    const uniqueCountries: string[] = allPaymentCountries.filter((country, index) => allPaymentCountries.indexOf(country) === index);
    const countryOptions: JSX.Element[] = uniqueCountries.map(c => <option key={c} value={c}>{c}</option>);

    const [selectedCountry, setSelectedCountry] = useState<string>(uniqueCountries[0])

    const changeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
        const target: HTMLSelectElement = event.currentTarget;
        const option = target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[option]);
    }

    const countrySelector = <select id="countrySelector" onChange={changeCountry}>
        {countryOptions}
    </select>;

    const loadDataFetchVersion = () => {
        getAllPaymentsFetchVersion()
            .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(jsonData => {
                                console.log("data has been received");
                                setPayments(jsonData);
                                setLoading(false);
                                setSelectedCountry(jsonData[0].country);
                            })
                            .catch(error => {
                                console.log("something went wrong - the data wasn't json", error);
                            });

                    } else {
                        console.log("something went wrong with the server request");
                    }
                }
            )
            .catch(error => {
                console.log("something went wrong with the server request", error);
            });
    }

    const loadDataAxiosVersion = () => {
        getAllPaymentsAxiosVersion()
            .then(response => {
                console.log("data has been received");
                setPayments(response.data);
                setLoading(false);
                setSelectedCountry(response.data[0].country);
            })
            .catch(error => {
                console.log("something went wrong", error);
            });
    };

    useEffect(() => loadDataAxiosVersion(), []);


    return (
        <div>
            {loading && <p className="loadingMessage">The data is loading please wait...</p>}
            {
                !loading &&
                <div>
                    <div className="transactionsCountrySelector">
                        Select country: {countrySelector}
                    </div>
                    <table className="transactionsTable">
                        <thead>
                        <tr>
                            <th>Id</th>
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
            }</div>
    );
}

export default Transactions
