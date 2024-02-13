import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export const getJobs = async () => {
  const query = gql`
    query {
      jobs {
        id
        title
        createdAt
        company {
          name
        }
      }
    }
  `;

  const { jobs } = await client.request(query);
  return jobs;
};

export const getJob = async (jobId) => {
  const query = gql`
    query ($id: ID!) {
      job(id: $id) {
        id
        title
        createdAt
        description
        company {
          id
          name
          description
        }
      }
    }
  `;

  const { job } = await client.request(query, { id: jobId });
  return job;
};

export const getCompany = async (companyId) => {
  const query = gql`
    query ($companyId: ID!) {
      companyById(id: $companyId) {
        id
        name
        description
        jobs {
          id
          title
          description
        }
      }
    }
  `;

  const { companyById } = await client.request(query, { companyId });
  return companyById;
};

export const createJob = async (input) => {
  const mutation = gql`
    mutation CreateJob($input: CreateJobInput!) {
      createJob(input: $input) {
        id
        title
        description
        createdAt
        company {
          id
          name
        }
      }
    }
  `;

  const { createJob } = await client.request(mutation, input);
  return createJob;
};
