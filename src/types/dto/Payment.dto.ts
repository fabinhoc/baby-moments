export interface PaymentDto {
  card_number: string | null;
  expiration_date: string | null;
  security_code: string | null;
  cardholder_name: string | null;
  issuer: string | null;
  installments: string | null;
  identification_type: string | null;
  identification_number: string | null;
  cardholder_email: string | null;
}
