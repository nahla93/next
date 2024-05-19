import User from '@/app/model/user';
import { NextRequest,NextResponse } from "next/server";
import { IPerson } from "@/app/types";
import connect from "@/app/utility/db";
import { NextApiRequest } from 'next';

export const PUT = async (req: NextRequest, { params }: any) => {
    try {
        
        
        const { id } = params;
        
        if (!id) {
            throw new Error("Missing user ID");
        }
        
        
  const { newName: name, newEmail: email, newCin: cin, newPhone: phone, newTag: tag, newAdresse: adresse} = await req.json();
        await connect();
        const user = await User.findOneAndUpdate(
            { _id: id.toString() },
            { name, email, cin, phone, tag, adresse },
            { new: true }
        );
        
        if (!user) {
            return new NextResponse(JSON.stringify({
                success: false,
                message: "User not found"
            }), { status: 404 });
        }
        
        const res = {
            success: true,
            message: "The person is updated successfully",
            data: user
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

export const GET = async(req:NextRequest, {params}:any) =>{

    const  {id}  = params
    await connect ();
    const user= await User.findOne({ _id: id.toString() });
    
    return NextResponse.json({ user }, { status: 200 });

}