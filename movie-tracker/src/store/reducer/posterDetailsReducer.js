import data from '../../http/top5MoviesAssessement.json';

const posterDetailsReducer =(state ={}, action)=>{
    // const rankState = {...state};
    debugger;
    switch(action.type){
        case 'SET_POSTER_DETAIL': 
        return action.movieDetail
           
        default:
        return state;
    }
}
export default posterDetailsReducer;