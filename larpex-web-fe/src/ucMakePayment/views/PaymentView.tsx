import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makePayment } from "../logic/PaymentLogic";
import { PaymentMethod, PaymentStatus } from "../viewModels/PaymentViewModel";
import "./PaymentView.css";

interface PaymentViewProps {}

const PaymentView: React.FC<PaymentViewProps> = () => {
  const { paymentId, paymentAmount } = useParams();
  const parsedPaymentAmount = paymentAmount ? parseInt(paymentAmount, 10) : 0;

  const [loading, setLoading] = useState<boolean>(false);
  const [paymentResponse, setPaymentResponse] = useState<{
    paymentStatus: PaymentStatus;
    redirectUrl: string;
  } | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>(PaymentMethod.CARD);

  const handlePay = async () => {
    try {
      setLoading(true);

      // Hardcoded userId for simulation (replace with actual user authentication)
      const userId = "12345";

      const paymentDto = {
        paymentId: Number(paymentId),
        paymentMethod: selectedPaymentMethod,
        userId,
        paymentAmount: parsedPaymentAmount,
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
    <div className="payment-container">
      <form className="payment-form">
        <div className="payment-info">
          <p>Payment ID: {paymentId}</p>
          <p>Payment Amount: {parsedPaymentAmount}</p>
        </div>
        <label className="payment-method-label">
          Payment Method:
          <select
            className="payment-method-select"
            value={selectedPaymentMethod}
            onChange={(e) =>
              setSelectedPaymentMethod(e.target.value as PaymentMethod)
            }
          >
            {Object.values(PaymentMethod).map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </label>
        <br />
        <div className="button-div">
          <button className="pay-button" onClick={handlePay} disabled={loading}>
            Pay
          </button>
        </div>
      </form>
      {loading && <p>Loading...</p>}
      {paymentResponse && (
        <div className="response-div">
          <p>Payment Status: {paymentResponse.paymentStatus}</p>
          <p>Redirect URL: {paymentResponse.redirectUrl}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentView;