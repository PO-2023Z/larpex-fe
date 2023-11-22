export interface InitPaymentDto {
  eventId: string;
}

export interface InitPaymentResponse {
  paymentId: number;
  paymentPrice: number;
}

export interface PaymentDto {
  paymentId: number;
  method: PaymentMethod;
  userToken: string;
}

export interface PaymentStatusDto{
  paymentId: string
}

export interface RedirectUrl{
  redirectUrl: string
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
