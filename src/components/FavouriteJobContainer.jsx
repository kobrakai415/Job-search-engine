import React, { useState } from 'react';
import { Col } from "react-bootstrap"
import dateDiff from '../helpers/datediff';
import { withRouter } from 'react-router';
import { connect } from "react-redux"
import { removeFromFavourites } from "../actions"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({

    unFavourite: (job) => dispatch(removeFromFavourites(job))
})

const FavouriteJobContainer = ({ job, history, unFavourite }) => {


    const jobHandler = (id) => {
        history.push(`/company/${id}`)
    }

    return (
        <Col className="mb-3" md={4}>
            <div className="job-container">

                <h5>{job.title}</h5>
                <h6 onClick={() => jobHandler(job.company_name)} >{job.company_name}</h6>
                <hr>
                </hr>
                <p>Posted: {dateDiff(job.publication_date)}</p>
                <p>Job type: {job.job_type}</p>
                <button type="button" className="btn btn-danger" onClick={() => { unFavourite(job) }}> Remove </button>

            </div>


        </Col>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FavouriteJobContainer));
