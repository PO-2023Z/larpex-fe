import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { getPaymentStatus } from "../logic/PaymentService";
import "./PaymentFinalView.css";

interface PaymentFinalViewProps {}

const PaymentFinalView: React.FC<PaymentFinalViewProps> = () => {
    const { paymentId } = useParams();
    const [paymentResponse, setPaymentResponse] = useState<string>();

    const getStatus = async () => {
    try {
        const response = await getPaymentStatus(String(paymentId));
        setPaymentResponse(response);

    } catch (error) {
        console.error("Error while getting payment status:", error);
    } 
    };

    useEffect(() => {
        getStatus();
    }, []);

return(
    <div className="response-div">
        {paymentResponse && (
            <>
                {paymentResponse === "NotResolved" ? (
                    <Alert variant="danger" className="center-text">
                        Payment Status: {paymentResponse}
                    </Alert>
                ) : (
                    <Alert variant="success" className="center-text">
                        Payment Status: {paymentResponse}
                    </Alert>
                )}
            </>
        )}
    </div>
);

};

export default PaymentFinalView;