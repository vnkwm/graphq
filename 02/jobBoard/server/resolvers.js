import { createJob, deleteJob, getJob, getJobs, getJobsByCompanyId, updateJob } from "./db/jobs.js";
import { createUser } from "./db/users.js";
import { getCompany } from "./db/companies.js";
import mongoose from "mongoose";
import JobModel from "./db/models/job.model.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    user: () => getUser(),
    job: (_root, args) => {
      return getJob(args.id);
    },
    companyById: (_root, args) => {
      return getCompany(args.id);
    },
  },

  Mutation: {
    createJob: async (_root, { input }) => {
      const companyId = new mongoose.Types.ObjectId("65c266738803cbfa1da7f5e1");
      const company = await getCompany(companyId);
      return createJob({ company, ...input });
    },
    createUser: async (_root, { input }) => {
      // const companyId = "65c266738803cbfa1da7f5e1";
      // const company = await getCompany(companyId)
      // console.log(input);
      let x = await createUser({ ...input });
      console.log(x);
      return x;
    },
    deleteJob: async (_root, { id }) => {
      // const { deletedCount } = await JobModel.deleteOne({ _id:id })
      // console.log('count is', deletedCount)
      // return !!deletedCount;
      
      return await deleteJob(id)
    },
    updateJob: async (_root, { input }) => {
      return await updateJob(input)
    }
  },

  User: {
    id: (user) => user._id,
  },

  Job: {
    id: (job) => job._id,
    title: (job) => {
      return job.title.trim();
    },
    company: (job) => {
      return getCompany(job.company);
    },
    createdAt: (job) => {
      return toIsoDate(new Date(job.createdAt).toISOString());
    },
  },

  Company: {
    jobs: (company) => {
      return getJobsByCompanyId(company.id);
    },
  },
};

function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
