import axios, { AxiosResponse } from 'axios';

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


let serverURL = "https://payments.multicode.uk";

if (process.env.APP_SERVER_URL) {
    serverURL = process.env.APP_SERVER_URL;
}

export const getAllPaymentsRestVersion = () :void  => {
    const responsePromise : Promise<Response> = fetch("https://payments.multicode.uk/api/payment", { method: "GET", headers : {'Accept': 'application/json'} });
    
    responsePromise.then(response => {
        response.json().then (data => {
            console.log(data);
        })
    });
}

export const getAllPaymentsFetchVersion = () : Promise<Response> => {
    const transactionsPromise = fetch(`${serverURL}/api/payment`,{ method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getAllPaymentsForCountryFetchVersion = (country: string) : Promise<Response> => {
    const transactionsPromise = fetch(`${serverURL}/api/payment?country=${country}`,{ method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getCountriesFetchVersion = () : Promise<Response> => {
    return fetch( `${serverURL}/api/country`, { method: "GET", headers : {'Accept': 'application/json'} });
}

export const getAllPayments = () : Promise<AxiosResponse<PaymentType[]>> => {
    const transactionsPromise = axios<PaymentType[]>({ url : `${serverURL}/api/payment`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getAllPaymentsForCountry = (country: string) : Promise<AxiosResponse<PaymentType[]>> => {
    const transactionsPromise = axios<PaymentType[]>({url : `${serverURL}/api/payment?country=${country}`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}

export const getCountries = () : Promise<AxiosResponse<string[]>> => {
    return axios<string[]>({url : `${serverURL}/api/country`, method: "GET", headers : {'Accept': 'application/json'} });
}

