/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  InitPaymentDto,
  InitPaymentResponse,
  PaymentDto,
  //PaymentStatus,
} from "../viewModels/PaymentViewModel";
import { apiUrl, validJWT } from "../../globals/connections";

export const initPayment = async (
  initPaymentDto: InitPaymentDto
): Promise<InitPaymentResponse> => {
  try {
    const response = await axios.post<InitPaymentResponse>(
      apiUrl + "Payments/init",
      initPaymentDto
    );

    const responseData: InitPaymentResponse = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on initialising payment:", error);
    throw error;
  }
};

export const finalizePayment = async (
  paymentDto: PaymentDto
): Promise<string> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await axios.post<string>(
      apiUrl + "Payments/create-transaction",
      paymentDto,
      {
        headers: {
          Authorization: `Bearer ${validJWT}`,
        },
      }
    );

    const responseData: string = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on creating transaction: ", error);
    throw error;
  }
};

export const getPaymentStatus = async (paymentId: string): Promise<string> => {
  try {
    const response = await axios.get<string>(apiUrl + `Payments/${paymentId}`);

    const responseData: string = response.data;
    return responseData;
  } catch (error) {
    console.error("Error on creating transaction: ", error);
    throw error;
  }
};
