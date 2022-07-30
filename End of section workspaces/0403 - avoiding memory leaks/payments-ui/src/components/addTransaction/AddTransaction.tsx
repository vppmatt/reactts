import './AddTransaction.css';
import {useState} from "react";
import {addNewTransaction, PaymentType} from "../../data/DataFunctions";
import {Form, Formik, Field, FormikHelpers} from 'formik';

const AddTransaction = () => {

    const initialNewTransaction : PaymentType = {id : 0, orderId : "", date : new Date().toISOString().slice(0, 10),
        amount : 0, country : "USA", currency : "USD", taxCode : 0, taxRate : 0.21, type: "SALE"};

    const [message, setMessage] = useState<string>("");

    const saveTransaction = (newTransaction :PaymentType, helpers: FormikHelpers<PaymentType>) => {
        const response = addNewTransaction(newTransaction);
        response.then(
            result => {
                helpers.setSubmitting(false);
                if (result.status === 200) {
                    setMessage("new transaction added");
                }
                else {
                    setMessage("something went wrong - error code was " + result.status );
                }
            }
        )
            .catch(error => console.log("something went wrong ", error));
    }

    return (
        <Formik
            initialValues = {initialNewTransaction}
            onSubmit={saveTransaction} >

            { ({isSubmitting}) => (
            <Form className="addTransactionsForm">
                <h2>New transaction</h2>
                <label htmlFor="orderId">Order Id</label>
                <Field id="orderId" name="orderId" />
                <br/>
                <label htmlFor="date">Date</label>
                <Field type="date" id="date" name="date" />
                <br/>
                <label htmlFor="country">Country</label>
                <Field id="country" name="country" />
                <br/>
                <label htmlFor="currency">Amount</label>
                <Field id="currency" name="currency" />
                <br/>
                <label htmlFor="amount">Amount</label>
                <Field id="amount" type="number" name="amount" />
                <br/>
                <label htmlFor="taxCode">Tax Code</label>
                <Field id="taxCode" type="number" name="taxCode" />
                <br/>
                <label htmlFor="amount">Tax Rate</label>
                <Field id="taxRate" type="number" name="taxRate" />
                <br/>
                <label htmlFor="type">Type</label>
                <Field id="type" name="type" />
                <br/>
                <button type="submit">Save</button>
                <div className="addTransactionMessage">{isSubmitting ? "saving..." : message }</div>
            </Form>

            )}

        </Formik>

    );
}

export default AddTransaction;
