import Survey from '@/app/model/Survey';
import { NextRequest,NextResponse } from "next/server";

import connect from "@/app/utility/db";
export const GET = async(req:NextRequest, {params}:any) =>{

    const  {id}  = params
    await connect ();
    const survey= await Survey.findOne({ _id: id.toString() });
    
    return NextResponse.json({ survey }, { status: 200 });

}