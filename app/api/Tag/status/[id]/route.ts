import Tag from '@/app/model/tag';
import { NextRequest,NextResponse } from "next/server";
import { ITag } from "@/app/types";
import connect from "@/app/utility/db";

export const PUT=async (req:NextRequest , { params }: any)=>{
    
    
    try {
        await connect();
        
        const { id } = params;
        
        if (!id) {
            throw new Error("Missing tag ID");
        }
        
        const bodyreq = await req.json();
        
        console.log("Request body:", bodyreq);
        
        const { visibility } = bodyreq as ITag;
             const newStatus =  visibility? true:false
              const tag= await Tag.findOneAndUpdate( { _id: id.toString() } , { visibility:newStatus}, {
                new: true
              });
        
        const res={
            success:true,
            message:"the visibility of tag is update successfuly",
            data:tag
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't update the visibility"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}


