import JobModel from "./models/job.model.js";

export async function getJobs() {
  return await JobModel.find();
}

export async function getJob(id) {
  return await JobModel.findById(id);
}

export async function createJob({ company, title, description }) {
  const job = await JobModel.create({
    company,
    title,
    description,
  });

  return job.toObject();
}

export async function deleteJob(id) {
  const job = await JobModel.findById({_id:id});
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  await job.deleteOne({_id: id});
  return job.toObject();
}

export async function updateJob({ id, title, description }) {
  const job = await JobModel.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  return job.toObject();
}

export async function getJobsByCompanyId(companyId) {
  const jobs = await JobModel.find({ company: companyId });
  return jobs ?? [];
}
