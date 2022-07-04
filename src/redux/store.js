import { createStore} from "redux"; // déprécié : utiliser configureStore de redux toolkit
import reducers from "./reducers";

const store = createStore(reducers,{});

export default store;