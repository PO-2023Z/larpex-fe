import React, { useState } from "react";
import { startPayment } from "../logic/PaymentLogic";
import InitPaymentResponse from "../viewModels/InitPaymentResponse";

interface PaymentStartViewProps {
  // You can add more props if needed
}

const PaymentStartView: React.FC<PaymentStartViewProps> = () => {
  const [initPaymentResponse, setInitPaymentResponse] =
    useState<InitPaymentResponse>();

  const handleStartPayment = async () => {
    try {
      const initPaymentDto = { eventId: "your_event_id" }; // Replace with actual eventId
      const response = await startPayment(initPaymentDto);
      setInitPaymentResponse(response);
    } catch (error) {
      console.error("Error starting payment:", error);
    }
  };

  return (
    <div>
      <button onClick={handleStartPayment}>Start Payment</button>
      {initPaymentResponse && (
        <div>
          <p>Payment ID: {initPaymentResponse.paymentId}</p>
          <p>Payment Amount: {initPaymentResponse.paymentAmount}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentStartView;
