import { getJob, getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs()
  },

  Job: {
    title: (job) => {
      return job.title.trim()
    },
    companyId: (job) => {
      return getCompany(job.companyId)
    },
    createdAt: (job) => {
      return toIsoDate(new Date(job.createdAt).toISOString())
    }
  },
};

function toIsoDate(value) {
  return value.slice(0, 'yyyy-mm-dd'.length)
}