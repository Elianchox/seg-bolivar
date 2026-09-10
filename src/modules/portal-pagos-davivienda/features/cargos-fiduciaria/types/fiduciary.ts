export interface CommerceIntegration {
  commerce_id: number;
  integration: string;
  labe_ticket: string;
  public_name: string;
  public_description: string;
  public_phone: string;
  city: string;
}

export interface FiduciaryTicket {
  id: number;
  name: string;
  client_id: string;
  client_key: string;
  document_number: string;
  tipo_doc: string;
  concept: string;
  reference: string;
  participacion: string;
  amount: number;
  original_amount: number;
  min_amount: number;
  max_amount: number;
  currency: string;
  date_end: string;
  email: string;
  phone: string;
  status: number;
  ticket_number: number;
  multi_ticket: boolean;
  ticket_less: boolean;
  ticket_more: boolean;
}

export interface FiduciaryConsultInput {
  ticketNumber: string;
  productNumber: string;
  amount: number;
}
