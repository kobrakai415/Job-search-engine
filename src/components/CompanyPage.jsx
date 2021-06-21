import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import JobContainer from "./JobContainer";

const ApiUrl = process.env.REACT_APP_API_URL

const CompanyPage = () => {

    const [companyJobs, setCompanyJobs] = useState([])

    const {id} = useParams()

    const fetchCompanyJobs = async () => {
        try {
            const res = await fetch(`${ApiUrl}?company_name=${id}`)
            console.log(res)
            console.log(`${ApiUrl}?comapny_name=${id}`)
            const json = await res.json()
            console.log(json)
            setCompanyJobs(json.jobs)

        } catch (error) {
            console.log(error)
        }   
    }
    useEffect(() => {
        fetchCompanyJobs()

    }, [])

    return (
        <>
        <h1 className="mb-3">Showing all jobs at {id} </h1>
            {companyJobs && companyJobs.slice(0,20).map((job, id) => {
                return <JobContainer key={id} job={job}/>
            })}
     </>
    );
}

export default CompanyPage;
