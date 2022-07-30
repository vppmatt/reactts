import axios, {AxiosPromise} from "axios";

export type PaymentType =
    {id: number,
    amount: number,
        country: string,
        currency: string,
        date: string,
        orderId: string,
        taxCode: number,
        taxRate: number,
        type: string}

export const getPaymentsForCountry : (country: string) => AxiosPromise<PaymentType[]>
    = (country) => {
    const transactionsPromise = axios({url : "http://localhost:8080/api/payment?country=" + country,
        method: "GET", headers : {'Accept': 'application/json'} });

    return transactionsPromise;
}

export const getPaymentsForOrder : (orderId: string) => AxiosPromise<PaymentType[]>
    = (orderId) => {
    const transactionsPromise = axios({url : "http://localhost:8080/api/payment?order=" + orderId,
        method: "GET", headers : {'Accept': 'application/json'} });

    return transactionsPromise;
}

export const getAllCountries : (controller : AbortController) => AxiosPromise<string[]> =
    (controller) => {
        return axios({url: "http://localhost:8080/api/country", method: "GET",
            headers: {"Accept" : "application/json"}, signal : controller.signal});
    }


export const addNewTransaction : (payment : PaymentType) => AxiosPromise<PaymentType>  = (payment) => {
    return axios({url : "http://localhost:8080/api/payment",
        method: "POST",
        headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data: payment});
}
