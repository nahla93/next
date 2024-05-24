import Admin from '@/app/model/admin';

import {IAdmin} from "@/app/types";
import { IPerson } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
export const POST=async (req:NextRequest, { params }: any)=>{
   
    try{
       
        await connect();
        const {id}=params;
        const _id= id.toString();
        const bodyreq=await req.json()
        const { name, email,phone,adresse} = bodyreq as IPerson ;
        const user=new Admin({
           _id ,name, email, phone, adresse
        })
        await user.save()
        
        const res={
            success:true,
            message:"the person is nommed successfuly",
            data:user
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't nommed the person"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}



export const GET = async() =>{
   
    try{
        
        connect();
        const admins: IAdmin[] = await Admin.find();
        return NextResponse.json(admins);
    } catch (err: any){
        console.log ({error: err.message});
        throw new Error ("failed to fetch users!");
    }

}