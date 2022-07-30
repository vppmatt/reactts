import {getAllCountries} from "../../../data/DataFunctions";
import {ChangeEvent, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

type CountriesSeclectorType = {
    setSelectedCountry : (country : string) => void,
    setLoaded : () => void
}

const CountriesSelector = (props: CountriesSeclectorType) => {
    const [countries, setCountries] = useState<string[]>(   ["--select--"]);
    const [searchParams, setSearchParams] = useSearchParams();
    const countryOptions: JSX.Element[] = countries.map(c => <option key={c} value={c}>{c}</option>);

    const country = searchParams.get("country");

    const [selectedCountry, setSelectedCountry] = useState<string>(country != null ? country : countries[0]);

    const loadCountries = (controller: AbortController) => {
            getAllCountries(controller)
                .then(response => {
                    if (response.status === 200) {
                        setCountries(response.data);
                        if (country != null) props.setSelectedCountry(country);
                        props.setLoaded();
                    } else {
                        console.log("Something went wrong - status " + response.status);
                    }
                })
                .catch(error => {
                    if (error.code !== "ERR_CANCELED")
                        console.log(error)
                });

    }

    useEffect(() => {
        const controller = new AbortController();
        loadCountries(controller);
        return () => { controller.abort()}
    }, []);

    const changeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
        const target: HTMLSelectElement = event.currentTarget;
        const option = target.options.selectedIndex;
        const country = countries[option - 1];
        props.setSelectedCountry(country);
        setSearchParams({"country" : country});
        setSelectedCountry(country);
    }

    const countrySelector = <select id="countrySelector" onChange={changeCountry} value={selectedCountry}>
        <option value="">--select--</option>
        {countryOptions}
    </select>;

    return <div className="transactionsCountrySelector">
        Select country: {countrySelector}
    </div>
}

export default CountriesSelector;
