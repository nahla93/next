import {IAdmin} from "@/app/types";
import { IPerson } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";
import Admin from '@/app/model/admin';



export const PUT = async (req: NextRequest, { params }: any) => {
    try {
        
        
        const { id } = params;
        
        if (!id) {
            throw new Error("Missing admin ID");
        }
        
        
  const {  name,  email,    phone,   adresse} = await req.json();
        await connect();
        const admin = await Admin.findOneAndUpdate(
            { _id: id.toString() },
            { name, email,  phone,  adresse },
            { new: true }
        );
        
        if (!admin) {
            return new NextResponse(JSON.stringify({
                success: false,
                message: "admin not found"
            }), { status: 404 });
        }
        
        const res = {
            success: true,
            message: "The profile is updated successfully",
            data: admin
        };
        
        return new NextResponse(JSON.stringify(res), { status: 200 });
    } catch (err:any) {
        console.error('Error updating profile:', err.message || err);
        
        const res = {
            success: false,
            message: "There is a problem, can't update the profile"
        };
        return new NextResponse(JSON.stringify(res), { status: 500 });
    }
};

export const GET = async(req:NextRequest, {params}:any) =>{

    const  {id}  = params
    await connect ();
    const admin= await Admin.findOne({ _id: id.toString() });
    
    return NextResponse.json({ admin }, { status: 200 });

}