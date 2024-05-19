import Mediation from '@/app/model/mediation';
import { IMediation } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";

export const POST=async (req:NextRequest)=>{
    try{
        await connect();
        const bodyreq=await req.json()
        const {
           title, requester, date, chat
             }=bodyreq as IMediation
        const mediation=new Mediation({
            title, requester, date, chat
        })
        await mediation.save()
        const res={
            success:true,
            message:"the mediation is added successfuly",
            data:mediation
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't add the mediation"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}

export const GET = async() =>{
   
    try{
        
        connect();
        const mediations: IMediation[] = await Mediation.find();
        return NextResponse.json(mediations);
    } catch (err: any){
        console.log ({error: err.message});
        throw new Error ("failed to fetch mediation!");
    }

}