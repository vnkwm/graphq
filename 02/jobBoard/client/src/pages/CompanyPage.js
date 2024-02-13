import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getCompany } from '../lib/graphql/queries';

function CompanyPage() {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState(null)

  useEffect(() => {
    if (companyId) {
      getCompany(companyId).then(setCompanyData)
    }
  }, [companyId])

  const company = companyData
  return (
    <div>
      <h1 className="title">
        {company?.name}
      </h1>
      <div className="box">
        {company?.description}
      </div>
      {companyData?.jobs?.map((job) => (
        <div key={job?.id} className="box">
          <p>{job?.title}</p>
          <p>{job?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyPage;
