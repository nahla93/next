import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
      name: string;
      adresse?: string;
      phone?: string;
      password?:string;
    };
  }

  interface User {
    _id: string;
    email: string;
    name: string;
    adresse?: string;
    phone?: string;
    password?:string;
  }
}
