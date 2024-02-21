import axios, { AxiosResponse } from 'axios';

export type PaymentType =
    {id: number | null
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



export const getAllPaymentsForOrderId = (orderId: string) : Promise<AxiosResponse<PaymentType[]>> => {
    const transactionsPromise = axios<PaymentType[]>({url : `${serverURL}/api/payment?order=${orderId}`, method: "GET", headers : {'Accept': 'application/json'} });
    return transactionsPromise;
}


export const addNewTransaction = (payment: PaymentType) : Promise<AxiosResponse<PaymentType>> => {
    return axios<PaymentType>({url : `${serverURL}/api/payment`,
        method: "POST",
        headers : {'Accept': 'application/json', 'Content-Type' : 'application/json'},
        data: payment});
}
