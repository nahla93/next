import User from '@/app/model/user';
import { NextRequest,NextResponse } from "next/server";
import { IPerson } from "@/app/types";
import connect from "@/app/utility/db";

export const PUT=async (req:NextRequest , { params }: any)=>{
    
    
    try {
        await connect();
        
        const { id } = params;
        
        if (!id) {
            throw new Error("Missing user ID");
        }
        
        const bodyreq = await req.json();
        
        console.log("Request body:", bodyreq);
        
        const { isBanned } = bodyreq as IPerson;
             const newStatus =  isBanned? true:false
              const user= await User.findOneAndUpdate( { _id: id.toString() } , { isBanned:newStatus}, {
                new: true
              });
        
        const res={
            success:true,
            message:"the person is blocked/not blocked successfuly",
            data:user
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't block the person"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}


