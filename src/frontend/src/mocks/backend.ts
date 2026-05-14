import type { backendInterface, Inquiry } from "../backend";
import { PropertyType } from "../backend";

const sampleInquiries: Inquiry[] = [
  {
    id: BigInt(1),
    fullName: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    phone: "+91 9876543210",
    propertyType: PropertyType.Residential,
    message: "Looking for a 3BHK apartment in a premium locality in Indore.",
    createdAt: BigInt(Date.now() * 1_000_000),
  },
  {
    id: BigInt(2),
    fullName: "Priya Mehta",
    email: "priya.mehta@example.com",
    phone: "+91 9765432109",
    propertyType: PropertyType.Commercial,
    message: "Interested in commercial office space for a startup.",
    createdAt: BigInt(Date.now() * 1_000_000),
  },
];

export const mockBackend: backendInterface = {
  getInquiryCount: async () => BigInt(sampleInquiries.length),
  listInquiries: async () => sampleInquiries,
  submitInquiry: async (fullName, email, phone, propertyType, message) => ({
    id: BigInt(3),
    fullName,
    email,
    phone,
    propertyType,
    message,
    createdAt: BigInt(Date.now() * 1_000_000),
  }),
};
