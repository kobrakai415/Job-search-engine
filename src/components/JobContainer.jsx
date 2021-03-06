import React, { useState } from 'react';
import { Col } from "react-bootstrap"
import dateDiff from '../helpers/datediff';
import { withRouter } from 'react-router';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { connect } from "react-redux"
import { addToFavourites, removeFromFavourites } from "../actions"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    favourite: (job) => {dispatch(addToFavourites(job))},
    unFavourite: (job) => dispatch(removeFromFavourites(job))
})

const JobContainer = ({ job, history, favourite, unFavourite }) => {
    
    const [liked, toggleLike] = useState(false)

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
                {liked && <AiFillHeart onClick={() => { unFavourite(job); toggleLike(false) }} style={{ fontSize: "40px" }} />}
                {!liked && <AiOutlineHeart onClick={() => { favourite(job); toggleLike(true) }} style={{ fontSize: "40px" }} />}
            </div>


        </Col>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobContainer));
