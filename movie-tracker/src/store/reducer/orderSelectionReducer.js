import data from '../../http/top5MoviesAssessement.json';


const initialState = {
    movieList: data.components[1].items, // list of movie
    orderList: data.components[0].items  // ordering of movie based on order type 
} 
 
const orderSelectionReducer =(state = initialState, action)=>{
    const releaseState = {...state};
    debugger;
    switch(action.type){
        case 'Release Date':
            const sortedByDate = state.movieList.sort((a, b) => {
                return a.releaseDate - b.releaseDate;
            });
            return {
                ...state,
                movieList:sortedByDate
            }
            
        case 'Rank': 
        const sortedByRank = state.movieList.sort((a, b) => {
            return a.rank - b.rank;
        });
        return {
            ...state,
            movieList:sortedByRank
        }
        
    default:
        return state;
    }
}
export default orderSelectionReducer;