import React from "react";
import { useNavigate } from "react-router-dom";
import { startPayment } from "../logic/PaymentLogic";
import "./PaymentStartView.css";

interface PaymentStartViewProps {}

const PaymentStartView: React.FC<PaymentStartViewProps> = () => {
  const navigate = useNavigate();

  const handleStartPayment = async () => {
    try {
      const initPaymentDto = { eventId: "your_event_id" }; // Replace with actual eventId
      const response = await startPayment(initPaymentDto);
      navigate(`/payment/${response.paymentId}/${response.paymentAmount}`);
    } catch (error) {
      console.error("Error starting payment:", error);
    }
  };

  return (
    <div className="init-payment-div">
      <button className="start-payment-button" onClick={handleStartPayment}>
        Start Payment
      </button>
    </div>
  );
};

export default PaymentStartView;
