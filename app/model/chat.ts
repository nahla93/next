import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({

  name: { type: String, required: true },
  
  
  messages: { type: String, required: true},
  
  date: { type: String},
 sender: { type: String},
 receiver:{type: String}
  
  
});

export default mongoose.models.Chat || mongoose.model('Chat', chatSchema);