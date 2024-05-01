import { ChangeEvent, useState } from 'react';
import { getAllPayments } from '../../data/DataFunctions';
import PaymentTableRow from './PaymentTableRow';
import './Transactions.css';

const Transactions  = () : JSX.Element => {

    const payments = getAllPayments();

    const countries : string[] = payments.map((payment) => payment.country);
    //const uniqueCountries : string[] = countries.filter((country, index) => countries.indexOf(country) === index);
    const uniqueCountries : string[] = Array.from(new Set(countries));

    const countryOptions : JSX.Element[] = uniqueCountries.map(c => <option key={c} value={c}>{c}</option>);

    const [selectedCountry , setSelectedCountry] = useState<string>(uniqueCountries[0])

    const changeCountry = (e : ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.options.selectedIndex;
        setSelectedCountry(uniqueCountries[option]);
    }

    const countrySelector : JSX.Element = <select id="countrySelector" onChange={changeCountry}>
        {countryOptions}
    </select>;

    return (<>
        <div className="transactionsCountrySelector">
                Select country: {countrySelector}
        </div>
    <table className="transactionsTable">
          <thead>
            <tr><th>Id</th><th>orderId</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th></tr>
          </thead>
          <tbody>
	          {payments
                .filter( payment => payment.country === selectedCountry)
                .map((payment) => <PaymentTableRow key={payment.id} payment={payment} />)}
          </tbody>
      </table>
      </>
    );
}

export default Transactions
