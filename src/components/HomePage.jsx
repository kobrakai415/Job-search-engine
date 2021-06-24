import React, { useState, useEffect } from 'react';
import JobContainer from './JobContainer';
import { Link } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import { addToFavourites, getVacancies } from "../actions"
import { connect } from "react-redux"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    getJobs: (query) => dispatch(getVacancies(query)),
    favourite: (job) => dispatch(addToFavourites(job))
})


const HomePage = (props) => {
    const [query, setQuery] = useState("")

    // const [debouncedQuery, setDebouncedQuery] = useState("") 

    // setDebouncedQuery(useDebounce(query, 500))

    useEffect(() => {
        props.getJobs(query)
    }, [query])

    return (
        <>
            <div id="search-bar-parent">
                <input id="search-bar" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find your dream job" />
                <svg className="search-bar-glass" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentcolor"></path>
                </svg>
            </div>

            {false && <>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </>}

            {props.jobs.vacancies.length > 0 ? props.jobs.vacancies.slice(0, 20).map((job, id) => {
                return <JobContainer key={id} job={job} />
            }) :
                <h4>No jobs to display, please search for a job!</h4>

            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}