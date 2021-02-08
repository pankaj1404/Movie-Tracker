import React from 'react'; 
import classes from './MovieMetaDataView.module.scss';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";


//component to show movie poster's meta data
const MovieMetaDataView = (props)=>{ 
    let history = useHistory();
    return(
        <>
        <button className={classes.movieBg} onClick={() => history.goBack()}>Back</button>
        <div className={classes.movieBg}>
            <img className={classes.poster}
            alt={props.location.state.val.title} 
            src={props.location.state.val.imageUrl} /><br/>
            <div className={classes.metaDataStyle}>
            <div><span>Title: </span> {props.location.state.val.title}</div><br/>
            <div><span>Synopsis: </span>{props.location.state.val.synopsis}</div><br/>
            <div><span>Rank: </span>{props.location.state.val.rank}</div><br/>
            <div><span>Release Date: </span>{props.location.state.val.releaseDate}</div><br/>
            </div>
        </div> 
        </>
    ); 
} 
MovieMetaDataView.propTypes = {
    location: PropTypes.object.isRequired
  };
export default MovieMetaDataView; 