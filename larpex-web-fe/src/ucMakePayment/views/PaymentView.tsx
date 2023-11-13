import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InitPaymentResponse } from "../viewModels/PaymentViewModel";

interface PaymentViewProps {}

const PaymentView: React.FC<PaymentViewProps> = () => {
  const location = useLocation() as {
    state: { response: InitPaymentResponse };
  };
  const [initPaymentResponse, setInitPaymentResponse] =
    useState<InitPaymentResponse | null>(null);

  useEffect(() => {
    if (location.state?.response) {
      setInitPaymentResponse(location.state.response);
    }
  }, [location.state]);

  return (
    <div>
      {initPaymentResponse ? (
        <>
          <h2>Payment Details</h2>
          <p>Payment ID: {initPaymentResponse.paymentId}</p>
          <p>Payment Amount: {initPaymentResponse.paymentAmount}</p>
          {/* Add additional details as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentView;
