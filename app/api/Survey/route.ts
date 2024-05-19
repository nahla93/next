import Survey from '@/app/model/Survey';
import { ISurvey } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";

export const POST=async (req:NextRequest)=>{
    try{
        await connect();
        const bodyreq=await req.json()
        const {title,
           description, date_debut,date_end, tag, question
             }=bodyreq as ISurvey
        const survey=new Survey({
            title,
            description, date_debut, date_end, tag, question,
        })
        await survey.save()
        const res={
            success:true,
            message:"the survey is added successfuly",
            data:survey
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't add the survey"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}

export const GET = async() =>{
   
    try{
        
       await connect();
        const surveys: ISurvey[] = await Survey.find();
        return NextResponse.json(surveys);
    } catch (err: any){
        console.log ({error: err.message});
        throw new Error ("failed to fetch surveys!");
    }

}