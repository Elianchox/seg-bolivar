export interface OnlinePayment {
  id: number;
  title: string;
  city: string;
  url: string;
  image: string;
}

export interface OnlinePaymentQuery {
  page?: number;
  limit?: number;
  cityId?: number | string;
  search?: string;
}

export interface OnlinePaymentResponse {
  results: OnlinePayment[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
