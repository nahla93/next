import Tag from '@/app/model/tag';
import { NextRequest,NextResponse } from "next/server";
import { ITag } from "@/app/types";
import connect from "@/app/utility/db";
import { NextApiRequest } from 'next';

export const PUT = async (req: NextRequest, { params }: any) => {
    try {
        
        
        const { id } = params;
        
        if (!id) {
            throw new Error("Missing user ID");
        }
        
        
  const {  name, description,  users} = await req.json();
        await connect();
        const tag = await Tag.findOneAndUpdate(
            { _id: id.toString() },
            { name, description, users },
            { new: true }
        );
        
        if (!tag) {
            return new NextResponse(JSON.stringify({
                success: false,
                message: "tag not found"
            }), { status: 404 });
        }
        
        const res = {
            success: true,
            message: "The tag is updated successfully",
            data: tag
        };
        
        return new NextResponse(JSON.stringify(res), { status: 200 });
    } catch (err:any) {
        console.error('Error updating tag:', err.message || err);
        
        const res = {
            success: false,
            message: "There is a problem, can't update the tag"
        };
        return new NextResponse(JSON.stringify(res), { status: 500 });
    }
};

export const GET = async(req:NextRequest, {params}:any) =>{

    const  {id}  = params
    await connect ();
    const tag= await Tag.findOne({ _id: id.toString() });
    
    return NextResponse.json({ tag }, { status: 200 });

}