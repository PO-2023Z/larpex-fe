import React from "react";
import { useParams } from "react-router-dom";
import { PaymentMethod } from "../viewModels/PaymentViewModel";

interface PaymentViewProps {
  // You can add more props if needed
}

const PaymentView: React.FC<PaymentViewProps> = () => {
  const { paymentId } = useParams();

  // Assume paymentAmount is passed as a prop or from state
  const paymentAmount = 50; // Replace with actual paymentAmount

  return (
    <div>
      <p>Payment ID: {paymentId}</p>
      <p>Payment Amount: {paymentAmount}</p>
      <label>
        Payment Method:
        <select>
          {Object.values(PaymentMethod).map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default PaymentView;
