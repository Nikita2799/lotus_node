export interface IOrder {
  typePost: string | number;
  fullName: string;
  numberPost: string | number | null;
  city: string | null;
  typePay: string | number;
  phone: string;
  status: string | number;
  productList: Array<productList>;
}

interface productList {
  idProduct: string | number;
  count: string | number;
}
