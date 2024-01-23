export interface Supplier extends SupplierContent {
  id: string;
  name: string;
  endpoint: string;
  contact: SupplierContact;
}

interface SupplierContact {
  website: Nullable<string>;
  email: Nullable<string>;
  telephone: Nullable<string>;
  address: Nullable<string>;
}

interface SupplierContent {
  country?: string;
  destinations?: SupplierDestination[];
}

export interface SupplierDestination {
  id: string;
  default: boolean;
  name: string;
  country: string;
  contact: SupplierContact;
  latitude: number;
  longitude: number;
  categories: SupplierCategory[];
}

export interface SupplierCategory {
  id: string;
  default: boolean;
  title: string;
  shortDescription: Nullable<string>;
  coverImageUrl: Nullable<string>;
  bannerImageUrl: Nullable<string>;
  productIds: string[];
}
