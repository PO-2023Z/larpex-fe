import React from "react";
import { useNavigate } from "react-router-dom";
import { initPayment } from "../logic/PaymentService";
import { InitPaymentDto } from "../viewModels/PaymentViewModel";
import "./PaymentStartView.css";

interface PaymentStartViewProps {}

const PaymentStartView: React.FC<PaymentStartViewProps> = () => {
  //const { eventId } = useParams();

  const navigate = useNavigate();

  const handleInitPayment = async () => {
    try {
      const initPaymentDto: InitPaymentDto = { eventId: "3fa85f64-5717-4562-b3fc-2c963f66afa6" }; // Replace with actual eventId
      const response = await initPayment(initPaymentDto);
      navigate(`/payment/${response.paymentId}/${response.paymentPrice}`);
    } catch (error) {
      console.error("Error starting payment:", error);
    }
  };

  return (
    <div className="init-payment-div">
      <button className="start-payment-button" onClick={handleInitPayment}>
        Start Payment
      </button>
    </div>
  );
};

export default PaymentStartView;
