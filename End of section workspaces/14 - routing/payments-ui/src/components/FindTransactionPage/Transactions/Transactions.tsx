import { ChangeEvent, useEffect, useState } from "react";
import {
  PaymentType,
  getAllPaymentsForCountry,
  getAllPaymentsForOrderId,
  getCountries,
} from "../../../data/DataFunctions";
import PaymentTableRow from "./PaymentTableRow";
import "./Transactions.css";
import { useParams, useSearchParams } from "react-router-dom";

const Transactions = (props: TransactionsProps): JSX.Element => {
  const [payments, setPayments] = useState<PaymentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [countryOptions, setCountryOptions] = useState<JSX.Element[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<string>("xxx");

  const [selectedOrder, setSelectedOrder] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const loadCountries = (): void => {
    getCountries()
      .then((response) => {
        setCountryOptions(
          response.data.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))
        );
        setLoading(true);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const loadTransactionsForSelectedCountry = () : void => {
    if (selectedCountry !== "xxx") {
    getAllPaymentsForCountry(selectedCountry!)
      .then((response) => {
        setLoading(false);
        setPayments(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
    }
  };

  const params = useParams();
  const desiredOrder : string = params.orderId != null ? params.orderId : props.searchTerm;
  
  if (desiredOrder !== selectedOrder) {
      setSelectedOrder(desiredOrder);
  }

  const urlCountry : string = searchParams.get("country") || "xxx";
    if (urlCountry !== selectedCountry) {
        setLoading(true);
        setSelectedCountry(urlCountry);
    }

  const loadTransactionsForSelectedOrder = () : void => {
    setCountryOptions([]);
    setPayments([]);

     getAllPaymentsForOrderId(props.searchTerm)
        .then(response => {
            setLoading(false);
            setPayments(response.data);
        })
        .catch(error => {
            console.log("something went wrong", error);
        });
};

  if(loading && selectedOrder === "") {
    loadTransactionsForSelectedCountry();
  }

  
  useEffect(() => {
    if (selectedOrder !== "" ) {
        setPayments([]);
        setLoading(true);
        loadTransactionsForSelectedOrder();
    }else {
        setPayments([]);
        loadCountries();
    }
}, [selectedOrder]);

  const changeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    setSelectedCountry( e.target.value);
    setSearchParams({country:  e.target.value});
  };

  const countrySelector: JSX.Element = (
    <select id="countrySelector" onChange={changeCountry} value={selectedCountry}>
      <option key="xxx" value="xxx" disabled={true} >--select--</option>
      {countryOptions}
    </select>
  );

  return (
    <>    
      {loading && countryOptions.length === 0 && (
        <p className="loadingMessage">The data is loading please wait...</p>
      )}

      {countryOptions.length > 0 && (
        <div className="transactionsCountrySelector">
          Select country: {countrySelector}
        </div>
      )}

      {loading && selectedCountry !== "xxx" && (
        <p className="loadingMessage">The data is loading please wait...</p>
      )}

      {loading && selectedCountry === "xxx" && (
        <p className="loadingMessage">Select a Country...</p>
      )}

      {!loading && (
        <table className="transactionsTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>orderId</th>
              <th>Date</th>
              <th>Country</th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments
              .map((payment) => (
                <PaymentTableRow key={payment.id} {...payment} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Transactions;

export type TransactionsProps = {searchTerm : string};