import React from 'react';
import classes from './MoviesMetaData.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';

//component to list the movie posters
const MoviesMetaData = (props)=>{
    const dispatch = useDispatch();
    const setPosterDetail = () =>{
        dispatch({type: 'SET_POSTER_DETAIL', movieDetail:props.movieDetail})
    }
        return (
            <div className={classes.imageAlignment}>
                <Link onClick={setPosterDetail} to={{
                    pathname:'/postermeta',
                    state:{
                        val:props.movieDetail
                    }
                }}>         
                <img className={classes.imageStyle} 
                                alt="Movie Posters" 
                                src={props.movieDetail.imageUrl} 
                                />
                </Link>
            </div>
            )
}
MoviesMetaData.propTypes = {
    movieDetail: PropTypes.object.isRequired
};
export default MoviesMetaData;

