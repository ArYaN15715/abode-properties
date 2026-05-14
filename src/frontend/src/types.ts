export type PropertyCategory =
  | "Residential"
  | "Commercial"
  | "Retail"
  | "Investment";

export interface Property {
  id: string;
  title: string;
  location: string;
  category: PropertyCategory;
  price: string;
  priceUnit: string;
  imageUrl: string;
  badge?: string;
  description: string;
  bedrooms?: number;
  area: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
}

export interface LifestyleImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
