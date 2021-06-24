import React from 'react';
import FavouriteJobContainer from './FavouriteJobContainer';
import { connect } from "react-redux"


const mapStateToProps = (state) => state

const FavouritesPage = ({ favouriteJobs }) => {

    return (
        <>
            <h1>Your Favourites</h1>

            {
                favouriteJobs && favouriteJobs.favourites.map(job => {
                    return <FavouriteJobContainer job={job} />
                })
            }
        </>
    );
}

export default connect(mapStateToProps)(FavouritesPage);
