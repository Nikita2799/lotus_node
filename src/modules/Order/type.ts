export interface IOrder {
  typePost: string | number;
  fullName: string;
  orderId: string;
  numberPost: string | number | null;
  city: string | null;
  typePay: string | number;
  phone: string;
  status: string | number;
  productList: Array<productList>;
}

interface productList {
  id: string | number;
  amount: string | number;
}
