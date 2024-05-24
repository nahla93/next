import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
export interface IPerson{
    _id: string
   name:string
    cin: String
   email:string
    phone: String
    tag: String
    adresse: String
    isBanned: Boolean
    isBloqued: Boolean
    password: string
}
export interface ITag {
    _id: string
    name: String
    description: String
    visibility: Boolean
    users: String
}
export interface ISurvey{
    _id: string
    title: String
    description: String
    date_debut: String
    date_end: String
    tag: String
    question: String
    result: String
}
export interface IFeedback{
    _id: string
    title: String
    source: String,
    date: String,
    type: string,

}
export interface IMediation{
    _id: string
   title: String
   requester: string
    date: String
    chat: string


}
export interface IAdmin{
    _id: string
    name: string,
    email: string
    password: string
    
    phone: string
    adresse: string
    country: string
}
 export type LoginErrorType = {
    email?: string;
    password?: string;
  };
  // * Forgot password payload type
 export type ForgotPasswordPayload = {
    email: string;
  };
  
  // reset password type
  export type ResetPasswordPayload = {
    email: string;
    signature: string;
    password: string;
    password_confirmation: string;
  };
  
 