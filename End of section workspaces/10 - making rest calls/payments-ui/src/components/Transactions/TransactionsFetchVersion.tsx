import { ChangeEvent, useEffect, useState } from "react";
import {
  PaymentType,
  getAllPaymentsForCountryFetchVersion,
  getCountriesFetchVersion,
} from "../../data/DataFunctions";
import PaymentTableRow from "./PaymentTableRow";
import "./Transactions.css";

const TransactionsFetchVersion = (): JSX.Element => {
  const [payments, setPayments] = useState<PaymentType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [uniqueCountries, setUniqueCountries] = useState<string[]>([]);
  const [countryOptions, setCountryOptions] = useState<JSX.Element[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const loadCountries = (): void => {
    getCountriesFetchVersion()
      .then((response) => {
        const json: Promise<string[]> = response.json();
        json.then((allCountries) => {
          setUniqueCountries(allCountries);
          setCountryOptions(
            allCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))
          );
          setLoading(true);
          setSelectedCountry(allCountries[0]);
        });
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const loadTransactionsForSelectedCountry = () => {
    getAllPaymentsForCountryFetchVersion(selectedCountry)
      .then((response) => {
        setLoading(false);
        const json: Promise<PaymentType[]> = response.json();
        json.then((payments) => {
          setPayments(payments);
        });
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  if (loading) loadTransactionsForSelectedCountry();

  useEffect(() => {
    loadCountries();
  }, []);

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
              .filter((payment) => payment.country === selectedCountry)
              .map((payment) => (
                <PaymentTableRow key={payment.id} {...payment} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TransactionsFetchVersion;
