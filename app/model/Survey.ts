import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({

  title: { type: String, required: true },
  
  
  description:{ type: String},
  
  date_debut: { type: String},
  date_end: { type: String},
  tag : { type: String},
  question:{ type: String},
  result: { type: String},
  
});

export default mongoose.models.Survey || mongoose.model('Survey', surveySchema);