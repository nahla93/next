import Admin from '@/app/model/admin';
import connect from "@/app/utility/db";
import bcrypt from 'bcryptjs';
import { NextResponse} from 'next/server';
export const POST = async (request: any)=>{
    const { email, password} = await request.json ();
    await connect ();
     
     


    try {
        const admin = await Admin. findOne ({ email,password}); 
       return new NextResponse (admin, {status: 200})
    }
    catch (err: any){
        return new NextResponse ( err,{ status:500, })
    }
}