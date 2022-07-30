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

export const getAllPayments : () => PaymentType[] 
    = () => { return [
        {id: 101, amount: 160, country: "USA", currency: "USD", date: "2017-01-31", orderId:"21216652", taxCode: 0, taxRate: 0, type: "SALE"},
        {id: 102, amount: 200, country: "FRA", currency: "EUR", date: "2017-02-01", orderId:"21216653", taxCode: 7, taxRate: 0.21, type: "SALE"},
        {id: 103, amount: -100, country: "SWE", currency: "EUR", date: "2017-02-01", orderId:"21216654", taxCode: 19, taxRate: 0.25, type: "Refund"},
        {id: 104, amount: 60, country: "USA", currency: "USD", date: "2017-02-02", orderId:"21216655", taxCode: 0, taxRate: 0, type: "SALE"},
        {id: 105, amount: 130, country: "USA", currency: "USD", date: "2017-01-31", orderId:"21216656", taxCode: 0, taxRate: 0, type: "SALE"},
        {id: 106, amount: 230, country: "FRA", currency: "EUR", date: "2017-02-01", orderId:"21216657", taxCode: 7, taxRate: 0.21, type: "SALE"},
        {id: 107, amount: -30, country: "SWE", currency: "EUR", date: "2017-02-01", orderId:"21216658", taxCode: 19, taxRate: 0.25, type: "Refund"},
        {id: 108, amount: 90, country: "USA", currency: "USD", date: "2017-02-02", orderId:"21216659", taxCode: 0, taxRate: 0, type: "SALE"},
        {id: 109, amount: 210, country: "USA", currency: "USD", date: "2017-01-31", orderId:"21216660", taxCode: 0, taxRate: 0, type: "SALE"},
        {id: 110, amount: 110, country: "FRA", currency: "EUR", date: "2017-02-01", orderId:"21216661", taxCode: 7, taxRate: 0.21, type: "SALE"},
        {id: 111, amount: -150, country: "SWE", currency: "EUR", date: "2017-02-01", orderId:"21216662", taxCode: 19, taxRate: 0.25, type: "Refund"},
        {id: 112, amount: 600, country: "USA", currency: "USD", date: "2017-02-02", orderId:"21216663", taxCode: 0, taxRate: 0, type: "SALE"}
    ]
}
