// Company.model.js

import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: String,
  description: String
}, {
  timestamps: true
});

const CompanyModel = mongoose.model('Company', companySchema);

export default CompanyModel;
