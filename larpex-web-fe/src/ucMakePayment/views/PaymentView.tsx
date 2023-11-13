import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makePayment } from "../logic/PaymentLogic";
import { PaymentMethod, PaymentStatus } from "../viewModels/PaymentViewModel";

interface PaymentViewProps {
  // You can add more props if needed
}

const PaymentView: React.FC<PaymentViewProps> = () => {
  const { paymentId } = useParams();
  const paymentAmount = 50; // Replace with actual paymentAmount

  const [loading, setLoading] = useState<boolean>(false);
  const [paymentResponse, setPaymentResponse] = useState<{
    paymentStatus: PaymentStatus;
    redirectUrl: string;
  } | null>(null);

  const handlePay = async () => {
    try {
      setLoading(true);

      // Hardcoded userId for simulation (replace with actual user authentication)
      const userId = "12345";

      const paymentDto = {
        paymentId: Number(paymentId),
        paymentMethod: PaymentMethod.CARD, // You can replace this with the selected payment method
        userId,
      };

      const response = await makePayment(paymentDto);

      setPaymentResponse(response);
    } catch (error) {
      console.error("Error making payment:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <br />
      <button onClick={handlePay} disabled={loading}>
        Pay
      </button>
      {loading && <p>Loading...</p>}
      {paymentResponse && (
        <div>
          <p>Payment Status: {paymentResponse.paymentStatus}</p>
          <p>Redirect URL: {paymentResponse.redirectUrl}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentView;
