import React from 'react';
import { Col } from "react-bootstrap"
import dateDiff from '../helpers/datediff';
import { withRouter } from 'react-router';

const JobContainer = ({ job, history }) => {

    const jobHandler = (id) => {
       history.push(`/company/${id}`)
    }
    return (
        <Col className="mb-3" onClick={() => jobHandler(job.company_name)} md={4}>
            <div className="job-container">

                <h5>{job.title}</h5>
                <h6>{job.company_name}</h6>
                <hr>
                </hr>
                <p>Posted: {dateDiff(job.publication_date)}</p>
                <p>Job type: {job.job_type}</p>
            </div>


        </Col>
    );
}

export default withRouter(JobContainer);
