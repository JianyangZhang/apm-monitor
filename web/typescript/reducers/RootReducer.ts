import { combineReducers } from 'redux';
import monitorReducer from './MonitorReducer';
import resourceReducer from './ResourceReducer';

const rootReducer = combineReducers({
	monitorReducer,
	resourceReducer
});

export default rootReducer;