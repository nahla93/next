import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({

  name: { type: String,  required: [true, "please write your fullname"], },
  
 email: { type: String,required: [true, "please provide a valid email"], unique: true },
password: { type:String},
lastName: {type:String},
phone : { type: String},
city: { type: String},
country : { type: String},
resetToken:{
  type:String,
  required: false,
},
resetTokenExpire: {
  type: Date,
  required: false,
}
  
}, {timestamps:true}
);

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);
