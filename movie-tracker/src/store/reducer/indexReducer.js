import { combineReducers } from 'redux'
import posterDetailsReducer from './posterDetailsReducer';
import orderSelectionReducer from './orderSelectionReducer';

export const reducer={
    orderSelection: orderSelectionReducer,
    posterDetail: posterDetailsReducer
}
const rootReducer = combineReducers(reducer);

export default rootReducer;



