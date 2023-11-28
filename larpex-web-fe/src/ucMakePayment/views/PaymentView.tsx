import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { finalizePayment } from "../logic/PaymentService";
import {
  CreateTransactionDto,
  CreateTransactionDtoResponse,
  PaymentMethod,
} from "../viewModels/PaymentViewModel";
import { BallTriangle } from "react-loader-spinner";
import "./PaymentView.css";

interface PaymentViewProps {}

const PaymentView: React.FC<PaymentViewProps> = () => {
  const { paymentId, paymentPrice } = useParams();
  const parsedPaymentAmount = paymentPrice;

  const [loading, setLoading] = useState<boolean>(false);
  const [createTransactionResponse, setCreateTransactionResponse] =
    useState<CreateTransactionDtoResponse>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>(PaymentMethod.CARD);

  const handlePay = async () => {
    try {
      console.log("start paying");
      setLoading(true);

      let createTransactionDto: CreateTransactionDto | undefined;

      if (paymentId) {
        createTransactionDto = {
          paymentId: paymentId,
          method: selectedPaymentMethod,
        };
      }

      const response = await finalizePayment(createTransactionDto!);
      console.log("response from create-transaction: ", response);

      setCreateTransactionResponse(response);
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
      {loading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#8a1ff3"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      ) : (
        <div style={{ width: 100, height: 100 }}></div>
      )}
      {createTransactionResponse && (
        <p className="center-redirect">
          Redirect URL:
          <a
            href={createTransactionResponse.redirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clickable-link"
          >
            {createTransactionResponse.redirectUrl}
          </a>
        </p>
      )}
    </div>
  );
};

export default PaymentView;
