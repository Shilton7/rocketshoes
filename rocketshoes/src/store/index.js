import { createStore } from 'redux';

//gerenciador principal
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
