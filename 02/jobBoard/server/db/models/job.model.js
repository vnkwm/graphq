// job.model.js

import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
