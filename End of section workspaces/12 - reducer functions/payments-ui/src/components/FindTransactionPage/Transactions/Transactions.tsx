import { ChangeEvent, useEffect, useState } from "react";
import {
  PaymentType,
  getAllPaymentsForCountry,
  getAllPaymentsForOrderId,
  getCountries,
} from "../../../data/DataFunctions";
import PaymentTableRow from "./PaymentTableRow";
import "./Transactions.css";

const Transactions = (props: TransactionsProps): JSX.Element => {
  const [payments, setPayments] = useState<PaymentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [uniqueCountries, setUniqueCountries] = useState<string[]>([]);
  const [countryOptions, setCountryOptions] = useState<JSX.Element[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const loadCountries = (): void => {
    getCountries()
      .then((response) => {
        setUniqueCountries(response.data);
        setCountryOptions(
          response.data.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))
        );
        setLoading(true);
        setSelectedCountry(response.data[0]);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const loadTransactionsForSelectedCountry = () : void => {
    getAllPaymentsForCountry(selectedCountry)
      .then((response) => {
        setLoading(false);
        setPayments(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

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

  if(loading && props.searchTerm.length === 0) {
    loadTransactionsForSelectedCountry();
  }

  
  useEffect(() => {
    if (props.searchTerm.length > 0 ) {
        setPayments([]);
        setLoading(true);
        loadTransactionsForSelectedOrder();
    }else {
        setPayments([]);
        loadCountries();
    }
}, [props.searchTerm]);

  const changeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.options.selectedIndex;
    setLoading(true);
    setSelectedCountry(uniqueCountries[option]);
  };

  const countrySelector: JSX.Element = (
    <select id="countrySelector" onChange={changeCountry}>
      {countryOptions}
    </select>
  );

  return (
    <>
      {countryOptions.length === 0 && (
        <p className="loadingMessage">The data is loading please wait...</p>
      )}

      {countryOptions.length > 0 && (
        <div className="transactionsCountrySelector">
          Select country: {countrySelector}
        </div>
      )}

      {loading && (
        <p className="loadingMessage">The data is loading please wait...</p>
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