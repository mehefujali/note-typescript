export interface IAddress {
  country: string;
  city: string;
  pincode: number;
}

export interface IUser {
  fristName: string;
  lastName: string;
  email: string;
  password: string; 
  role: "user" | "admin";
  address: IAddress;
}

export interface UserInstanceMethod {
  hashPassword(password: string): string;
}
