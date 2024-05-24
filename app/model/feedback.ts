import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({

  title: { type: String, required: true },
  
  
  source: { type: String},
  
  date: { type: String},
 type: { type: String},
  
  
});

export default mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);