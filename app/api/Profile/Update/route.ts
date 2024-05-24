import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest,NextResponse } from "next/server";
import { getSession, useSession } from "next-auth/react";
import connect from "@/app/utility/db";
import Admin from "@/app/model/admin";
export const PUT = async (req: NextRequest,res: NextResponse,  ) =>{
    try {
        const session= await getSession ( )
         
        const  id  = session?.user._id
        const { name, email,password, phone, adresse}= await req.json()
        
        
        
        
  
        await connect();
        const admin = await Admin.findOneAndUpdate(
            {_id: id?.toString() },
            { name, email,password, phone, adresse },
            { new: true }
        );
        
        
        
        const res = {
            success: true,
            message: "The profile is updated successfully",
            data: admin
        };
        
        return new NextResponse(JSON.stringify(res), { status: 200 });
    } catch (err:any) {
        console.error('Error updating user:', err.message || err);
        
        const res = {
            success: false,
            message: "There is a problem, can't update the person"
        };
        return new NextResponse(JSON.stringify(res), { status: 500 });
    }
};