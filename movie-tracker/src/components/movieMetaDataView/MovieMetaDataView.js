import React from 'react'; 
import classes from './MovieMetaDataView.module.scss';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';


//component to show movie poster's meta data
const MovieMetaDataView = (props)=>{ 
    let history = useHistory();
    const  posterDetail = useSelector(state=>state.posterDetail);
    console.log(posterDetail);
    return(
        <>
        <button className={classes.movieBg} onClick={() => history.goBack()}>Back</button>
        <div className={classes.movieBg}>
            <img className={classes.poster}
            alt={posterDetail.title} 
            src={posterDetail.imageUrl} /><br/>
            <div className={classes.metaDataStyle}>
            <div><span>Title: </span> {posterDetail.title}</div><br/>
            <div><span>Synopsis: </span>{posterDetail.synopsis}</div><br/>
            <div><span>Rank: </span>{posterDetail.rank}</div><br/>
            <div><span>Release Date: </span>{posterDetail.releaseDate}</div><br/>
            </div>
        </div> 
        </>
    ); 
} 
MovieMetaDataView.propTypes = {
    location: PropTypes.object.isRequired
  };
export default MovieMetaDataView; 