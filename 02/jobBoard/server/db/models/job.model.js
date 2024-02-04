// job.model.js

import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  title: String,
  description: String,
}, {
  timestamps: true
});

const JobModel = mongoose.model('Job', jobSchema);

export default JobModel;
