export interface InitPaymentDto {
  eventId: string;
}

export interface InitPaymentResponse {
  paymentId: string;
  paymentPrice: number;
}

export interface PaymentDto {
  paymentId: string;
  method: PaymentMethod;
}

export interface PaymentDtoResponse {
  redirectUrl: string;
}

export enum PaymentMethod {
  BLIK = "BLIK",
  CARD = "CARD",
  TRANSFER = "TRANSFER",
  SMS = "SMS",
  BANKTRANSFER = "BANKTRANSFER",
}

export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  NOTSTARTED = "NOTSTARTED",
}
