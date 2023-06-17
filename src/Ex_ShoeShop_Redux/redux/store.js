import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducer/rootReducer";
import { createStore } from "redux";

export const store=createStore(rootReducer,composeWithDevTools())