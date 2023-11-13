export interface InitPaymentDto {
  eventId: string;
}

export interface InitPaymentResponse {
  paymentId: number;
  paymentAmount: number;
}

export interface PaymentDto {
  paymentId: number;
  paymentMethod: PaymentMethod;
  userId: string;
}

export enum PaymentMethod {
  BLIK = "BLIK",
  CARD = "CARD",
  TRANSFER = "TRANSFER",
}

export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}
