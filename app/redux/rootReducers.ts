import { combineReducers } from "@reduxjs/toolkit";
import { projectApi } from "./api/project.api";
import { techApi } from "./api/tech.api";

export const reducers = combineReducers({
  [projectApi.reducerPath]: projectApi.reducer,
  [techApi.reducerPath]: techApi.reducer,
});

export const middlewares=[
    projectApi.middleware,
    techApi.middleware,
];
