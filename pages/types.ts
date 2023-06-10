export type Product = {
  Product: {
    id: string;
    name: string;
  };
};

export type Seller = {
  Seller: {
    id: string;
    name: string;
    orders: Order[];
  };
};

export type Order = {
  Order: {
    id: string;
    supporter: Supporter;
  };
};

export type Supporter = {
  Supporter: {
    id: string;
    name: string;
  };
};

export type Fundraiser = {
  id: string;
  name: string;
  products: Product[];
  sellers: Seller[];
};

export type FundraiserProps = {
  feed: Fundraiser[];
};
