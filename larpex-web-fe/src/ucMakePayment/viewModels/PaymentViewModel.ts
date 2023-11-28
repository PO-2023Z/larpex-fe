export interface InitPaymentDto {
  eventId: string;
}

export interface InitPaymentResponse {
  paymentId: string;
  paymentPrice: number;
}

export interface CreateTransactionDto {
  paymentId: string;
  method: PaymentMethod;
}

export interface CreateTransactionDtoResponse {
  redirectUrl: string;
}

export interface PaymentStatusDto {
  paymentId: string;
}

export interface PaymentStatusDtoResponse {
  status: PaymentStatus;
}

export enum PaymentMethod {
  BLIK = "BLIK",
  CARD = "CARD",
  TRANSFER = "TRANSFER",
  SMS = "SMS",
  BANKTRANSFER = "BANKTRANSFER",
}

export enum PaymentStatus {
  SUCCESS = "Success",
  FAILURE = "Failure",
  NOTRESOLVED = "NotResolved",
}
