import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({

  name: { type: String,  required: [true, "please write your fullname"], },
  
 email: { type: String,required: [true, "please provide a valid email"], unique: true },
password: { type:String},

phone : { type: String},

adresse : { type: String},
password_reset_token: {
  required: false,
  type: String,
  trim: true,
},

  
}, {timestamps:true}
);

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);
