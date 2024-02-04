import JobModel from './models/job.model.js'

export async function getJobs() {
  return await JobModel.find();
}

export async function getJob(id) {
  return await JobModel.findById(id);
}

export async function createJob({ companyId, title, description }) {
  const job = await JobModel.create({
    companyId,
    title,
    description,
  });
  return job.toObject();
}

export async function deleteJob(id) {
  const job = await JobModel.findById(id);
  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }
  await job.remove();
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