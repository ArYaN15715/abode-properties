import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    propertyType: PropertyType;
    createdAt: bigint;
    fullName: string;
    email: string;
    message: string;
    phone: string;
}
export enum PropertyType {
    Commercial = "Commercial",
    Retail = "Retail",
    Investment = "Investment",
    Residential = "Residential"
}
export interface backendInterface {
    getInquiryCount(): Promise<bigint>;
    listInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(fullName: string, email: string, phone: string, propertyType: PropertyType, message: string): Promise<Inquiry>;
}
