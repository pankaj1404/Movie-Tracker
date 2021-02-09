import React, { useEffect, useState }  from 'react';
import classes from './MovieList.module.scss';
import MoviesMetaData from '../movieMetadata/MoviesMetaData.js';
import {useSelector,useDispatch} from 'react-redux';

const MovieList =()=>{
    debugger;
    const  posterDetails = useSelector(state=>state.posterDetails);
    const {movieList, orderList} = useSelector(state=>state.orderSelection);
    
    console.log(movieList,orderList);
    console.log(typeof movieList, typeof orderList);

    const dispatch = useDispatch();
    const selection=(e)=>{
        console.log(e);
        dispatch({type: e.target.value})
    }
    let optionItems = orderList && orderList.map((order) =>
        <option key={order.label} >{order.label}</option>
    );
    return (
        <>
        {
            <div className={classes.dropdownStyle}>
            <h4>Select Movie Order by - Realease Date or Rank</h4>
            <select onChange={e=>selection(e)}>
                {optionItems}
            </select>
            </div>
        }
    <div className={classes.movieBg}>
        {
        movieList && movieList.map((item,index)=>{
                return ( 
                <MoviesMetaData key={index} movieDetail={item}/>
                ) 
            })
        }
    </div>
    </>
    )
}
export default MovieList; 