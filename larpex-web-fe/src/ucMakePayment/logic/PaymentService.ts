import axios from 'axios';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  InitPaymentDto,
  InitPaymentResponse,
  PaymentDto,
  PaymentStatus,
  PaymentStatusDto
} from "../viewModels/PaymentViewModel";

export const initPayment = async (
  initPaymentDto: InitPaymentDto
): Promise<InitPaymentResponse> => {
  // Mocked API call (replace with actual API call)
  //const mockedResponse: InitPaymentResponse = {
  //  paymentId: 123,
  //  paymentAmount: 70,
  //}
  try {
    //________________________________________
    const resp: InitPaymentResponse = {
      paymentId: 123,
      paymentPrice: 70
    }
    return resp;
    //______Wyzej_podstawiony_response_________
    const response = await axios.post<InitPaymentResponse>('http://localhost:5082/Payments/init', initPaymentDto);
    
    const responseData: InitPaymentResponse = response.data;
    //const responseData: InitPaymentResponse = {"paymentId": 5, "paymentAmount": 5};
    return responseData;

  } catch (error) {
    console.error('Błąd podczas inicjowania płatności:', error);
    throw error;
  }  
  };

  //return new Promise((resolve) => {
  //  setTimeout(() => {
  //    console.log("Mocked API Response:", mockedResponse);
  //    resolve(mockedResponse);
  //  }, 1000);
  //});
//};

export const finalizePayment = async (
  paymentDto: PaymentDto
//): Promise<{ paymentStatus: PaymentStatus; redirectUrl: string }> => {
  ): Promise<{ redirectUrl: string }> => {
  // Mocked API call (replace with actual API call)
  //const mockedResponse: { paymentStatus: PaymentStatus; redirectUrl: string } =
  //  {
  //    paymentStatus: PaymentStatus.SUCCESS,
  //    redirectUrl: "https://example.com",
  //  };

  //console.log("taken dto: ", paymentDto);
  try {
    //________________________________________
    const resp = {
      redirectUrl: "https://example.com"
    }
    return resp;
    //______Wyzej_podstawiony_response_________
    const response = await axios.post('http://localhost:5082/Payments/create-transaction', paymentDto);
    
    return response.data;

  } catch (error) {
    console.error('Błąd podczas finalizowania płatności:', error);
    throw error;
  }  

  //return new Promise((resolve) => {
  //  setTimeout(() => {
  //    console.log("Mocked API Response:", mockedResponse);
  //    resolve(mockedResponse);
  //  }, 3500);
  //});
};

export const getPaymentStatus = async (
  paymentStatusDto: PaymentStatusDto
): Promise<{paymentStatus: PaymentStatus}> => {
  try {
    //________________________________________
    const resp = {paymentStatus: PaymentStatus.SUCCESS};
    
    return resp;
    //______Wyzej_podstawiony_response_________
    const response = await axios.post(`http://localhost:5082/Payments/${paymentStatusDto.paymentId}`, paymentStatusDto.paymentId);
    
    return response.data;

  } catch (error) {
    console.error('Błąd podczas sprawdzania statusu płatności:', error);
    throw error;
  }
};