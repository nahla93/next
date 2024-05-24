import Mediation from '@/app/model/mediation';
import { NextRequest,NextResponse } from "next/server";
import connect from "@/app/utility/db";

export const GET = async(req:NextRequest, {params}:any) =>{

    const  {id}  = params
    await connect ();
    const mediation= await Mediation.findOne({ _id: id.toString() });
    
    return NextResponse.json({ mediation }, { status: 200 });

}