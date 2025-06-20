export interface IUser {
  fristName:string;
  lastName:string;
  email: string ;
  password:string;
  role: "user" | "admin"
}