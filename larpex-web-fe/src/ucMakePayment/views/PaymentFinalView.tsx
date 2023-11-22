import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { PaymentStatus, PaymentStatusDto } from "../viewModels/PaymentViewModel";
import { getPaymentStatus } from "../logic/PaymentService";

interface PaymentFinalViewProps {}

const PaymentFinalView: React.FC<PaymentFinalViewProps> = () => {
    const { paymentId } = useParams();
    const [paymentResponse, setPaymentResponse] = useState<{
        paymentStatus: PaymentStatus;
    } | null>(null);

    const getStatus = async () => {
    try {
        setPaymentResponse(null);

        const paymentStatusDto = {
            paymentId: String(paymentId)
          };
        const response = await getPaymentStatus(paymentStatusDto);

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
                    {paymentResponse.paymentStatus === PaymentStatus.FAILURE ? (
                        <Alert variant="danger" className="center-text">
                            Payment Status: {paymentResponse.paymentStatus}
                        </Alert>
                    ) : (
                        <Alert variant="success" className="center-text">
                            Payment Status: {paymentResponse.paymentStatus}
                        </Alert>
                    )}
                </>
            )}
        </div>
);

};

export default PaymentFinalView;