import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
 

  name: { type: String, required: true },
  
  
  description:{ type: String},
  
  
  visibility: { type: Boolean},
  users : [{ type: mongoose.Schema.Types.ObjectId, ref:'User'}],
  
});

export default mongoose.models.Tag || mongoose.model('Tag', tagSchema);
