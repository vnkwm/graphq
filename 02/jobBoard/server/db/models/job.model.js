// job.model.js

import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  companyId: String,
  title: String,
  description: String,
}, {
  timestamps: true
});

const JobModel = mongoose.model('Job', jobSchema);

export default JobModel;
