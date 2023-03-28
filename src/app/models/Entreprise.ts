export type Entreprise = {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  description: string;
  imageUrl: string;
  contactName: string;
  contactEmail?: string;
  contactPhone?: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  published?: boolean;
};
