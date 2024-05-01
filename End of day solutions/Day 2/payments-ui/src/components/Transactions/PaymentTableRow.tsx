import { PaymentType } from "../../data/DataFunctions";

const PaymentTableRow = (props: PaymentTableRowProps) : JSX.Element => {
    return <tr>
        <td>{props.payment.id}</td>
        <td>{props.payment.orderId}</td>
        <td>{props.payment.date}</td>
        <td>{props.payment.country}</td>
        <td>{props.payment.currency}</td>
        <td>{props.payment.amount}</td>
</tr>;
};

export default PaymentTableRow;

type PaymentTableRowProps = {
    payment: PaymentType
}
