import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { getPaymentStatus } from "../logic/PaymentService";
import "./PaymentFinalView.css";
import {
  PaymentStatus,
  PaymentStatusDto,
  PaymentStatusDtoResponse,
} from "../viewModels/PaymentViewModel";

interface PaymentFinalViewProps {}

const PaymentFinalView: React.FC<PaymentFinalViewProps> = () => {
  const { paymentId } = useParams();
  const [paymentResponse, setPaymentResponse] =
    useState<PaymentStatusDtoResponse>();
  const paymentStatusDto: PaymentStatusDto = { paymentId: String(paymentId) };

  const getStatus = async () => {
    try {
      const response = await getPaymentStatus(paymentStatusDto);
      setPaymentResponse(response);
    } catch (error) {
      console.error("Error while getting payment status:", error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className="response-div">
      {paymentResponse && (
        <>
          {paymentResponse.status === PaymentStatus.FAILURE ? (
            <Alert variant="danger" className="center-text">
              Payment Status: {paymentResponse.status}
            </Alert>
          ) : paymentResponse.status === PaymentStatus.SUCCESS ? (
            <Alert variant="success" className="center-text">
              Payment Status: {paymentResponse.status}
            </Alert>
          ) : (
            <Alert variant="warning" className="center-text">
              Payment Status: {paymentResponse.status}
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentFinalView;
