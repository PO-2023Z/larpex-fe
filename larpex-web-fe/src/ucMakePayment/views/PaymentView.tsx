import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { finalizePayment } from "../logic/PaymentService";
import { PaymentDto, PaymentMethod } from "../viewModels/PaymentViewModel";
import { InfinitySpin } from "react-loader-spinner";
import "./PaymentView.css";

interface PaymentViewProps {}

const PaymentView: React.FC<PaymentViewProps> = () => {
  const { paymentId, paymentPrice } = useParams();
  const parsedPaymentAmount = paymentPrice;

  const [loading, setLoading] = useState<boolean>(false);
  const [paymentResponse, setPaymentResponse] = useState<string>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>(PaymentMethod.CARD);

  const handlePay = async () => {
    try {
      console.log("start paying");
      setLoading(true);

      let paymentDto: PaymentDto | undefined;

      if (paymentId) {
        paymentDto = {
          paymentId: paymentId,
          method: selectedPaymentMethod,
        };
      }

      const response = await finalizePayment(paymentDto!);
      console.log("response from create-transaction: ", response);

      setPaymentResponse(response);
    } catch (error) {
      console.error("Error while making payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <form className="payment-form">
        <div className="payment-info">
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
      {loading && <InfinitySpin width="200" color="#8a1ff3" />}
      {paymentResponse && (
        <div className="response-div">
          <p>
            Redirect URL:
            <a
              href={paymentResponse}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-link"
            >
              {paymentResponse}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentView;
