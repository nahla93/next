import Feedback from '@/app/model/feedback';
import { NextRequest,NextResponse } from "next/server";
import { IFeedback } from "@/app/types";
import connect from "@/app/utility/db";

export const GET = async(req:NextRequest, {params}:any) =>{

    const  {id}  = params
    await connect ();
    const feedback= await Feedback.findOne({ _id: id.toString() });
    
    return NextResponse.json({feedback}, { status: 200 });

}