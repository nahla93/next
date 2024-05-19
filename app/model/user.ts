import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  name: { type: String, required: true },
  cin: { type: String, required: true, unique:true},
 email: { type: String, required: true, unique: true },
  phone:{ type: String},
  tag:{ type: String, required: true},
  adresse: { type: String},
  isBanned: { type: Boolean},
  isBloqued: { type: Boolean},
  password: { type:String},
  
});

export default mongoose.models.User || mongoose.model('User', userSchema);
