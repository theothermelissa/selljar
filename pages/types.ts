export type Product = {
  id: string;
  name: string;
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
  products: FundraiserProduct[];
  sellers: Seller[];
};

export type FundraiserProduct = {
  id: string;
  Product: Product;
  fundraiser: Fundraiser;
};

export type FundraiserProps = {
  feed: Fundraiser[];
};

export type ProductProps = {
  feed: Product[];
};
