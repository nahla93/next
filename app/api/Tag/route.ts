import Tag from '@/app/model/tag';
import { ITag } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";

export const POST=async (req:NextRequest)=>{
    try{
        await connect();
        const bodyreq=await req.json()
        const {name,
           description, visibility, users
             }=bodyreq as ITag
        const tag=new Tag({
            name,
            description, visibility, users
        })
        await tag.save()
        const res={
            success:true,
            message:"the tag is added successfuly",
            data:tag
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't add the tag"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}

export const GET = async() =>{
   
    try{
        
       await connect();
        const tags: ITag[] = await Tag.find();
        return NextResponse.json(tags);
    } catch (err: any){
        console.log ({error: err.message});
        throw new Error ("failed to fetch tags!");
    }

}