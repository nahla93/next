import Feedback from '@/app/model/feedback';
import { IFeedback } from "@/app/types";
import connect from "@/app/utility/db";
import { NextRequest,NextResponse } from "next/server";
export const GET = async() =>{
   
    try{
        
       await connect();
        const feedbacks: IFeedback[] = await Feedback.find();
        return NextResponse.json(feedbacks);
    } catch (err: any){
        console.log ({error: err.message});
        throw new Error ("failed to fetch feedback!");
    }

}
export const POST=async (req:NextRequest)=>{
    try{
        await connect();
        const bodyreq=await req.json()
        const {title,
           source,date, type
             }=bodyreq as IFeedback
        const feedback=new Feedback({
            title,
           source,date, type
        })
        await feedback.save()
        const res={
            success:true,
            message:"the feed is added successfuly",
            data:feedback
        }
        return new NextResponse(JSON.stringify(res),{status:200})
    }catch(err){
        const res={
            success:false,
            message:"there is a problem can't add the feed"
        }
        console.log(err)
        return new NextResponse(JSON.stringify(res),{status:500})
    }
}