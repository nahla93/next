import User from '@/app/model/user';
import { IPerson } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";

export const POST=async (req:NextRequest)=>{
    try{
        await connect();
        const bodyreq=await req.json()
        const {name,
           cin,
            email,
            phone,
            tag,
            adresse
             }=bodyreq as IPerson
        const user=new User({
            name,
            cin,
             email,
             phone,
             tag,
             adresse
        })
        await user.save()
        const res={
            success:true,
            message:"the person is added successfuly",
            data:user
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't add the person"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}

export const GET = async() =>{
   
    try{
        
        connect();
        const users: IPerson[] = await User.find();
        return NextResponse.json(users);
    } catch (err: any){
        console.log ({error: err.message});
        throw new Error ("failed to fetch users!");
    }

}