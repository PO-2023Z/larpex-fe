/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  CreateTransactionDto,
  CreateTransactionDtoResponse,
  InitPaymentDto,
  InitPaymentResponse,
  PaymentStatusDto,
  PaymentStatusDtoResponse,
  //PaymentStatus,
} from "../viewModels/PaymentViewModel";
import { apiUrl, validJWT } from "../../globals/connections";

export const initPayment = async (
  initPaymentDto: InitPaymentDto
): Promise<InitPaymentResponse> => {
  try {
    const response = await axios.post<InitPaymentResponse>(
      apiUrl + "Payments/init?eventId=" + initPaymentDto.eventId
    );

    const responseData: InitPaymentResponse = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on initialising payment:", error);
    throw error;
  }
};

export const finalizePayment = async (
  createTransactionDto: CreateTransactionDto
): Promise<CreateTransactionDtoResponse> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await axios.post<CreateTransactionDtoResponse>(
      apiUrl + "Payments/create-transaction",
      createTransactionDto,
      {
        headers: {
          Authorization: `Bearer ${validJWT}`,
        },
      }
    );

    const responseData: CreateTransactionDtoResponse = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on creating transaction: ", error);
    throw error;
  }
};

export const getPaymentStatus = async (
  paymentStatusDto: PaymentStatusDto
): Promise<PaymentStatusDtoResponse> => {
  try {
    const response = await axios.get<PaymentStatusDtoResponse>(
      apiUrl + `Payments/${paymentStatusDto.paymentId}`
    );

    const responseData: PaymentStatusDtoResponse = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on creating transaction: ", error);
    throw error;
  }
};
