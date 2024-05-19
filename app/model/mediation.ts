import mongoose from 'mongoose';

const mediationSchema = new mongoose.Schema({

  title: { type: String, required: true },
  
  
  requester:{ type: String},
  
  date: { type: String},
  chat: { type: String},
  
  
});

export default mongoose.models.Mediation || mongoose.model('Mediation', mediationSchema);