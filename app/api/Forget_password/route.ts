import Admin from '@/app/model/admin';
import connect from "@/app/utility/db";
import crypto from "crypto"; 
import { NextResponse} from 'next/server';
export const POST = async (request: any)=>{
    const { email} = await request.json ();
    await connect ();
     const existingAdmin = await Admin. findOne ({ email});
     if (!existingAdmin){
        return new NextResponse ("Email doesn't exist", {status:400})
     }
     const resetToken= crypto.randomBytes(20).toString ('hex');
     const passwordResetToken= crypto
     .createHash ("sha256")
     .update (resetToken)
     .digest ("hex");
     const passwordResetExpire = Date.now() + 3600000;
     existingAdmin.resetToken = passwordResetToken;
     existingAdmin.resetTokenExpire = passwordResetExpire;
     const resetURL= `localhost:3000/reset-password/${resetToken}`;
     console.log (resetURL);
     
}