import CompanyModel from './models/company.model.js';

export async function getCompany(id) {
  return await CompanyModel.findById(id);
}