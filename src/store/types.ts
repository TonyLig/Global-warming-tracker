// Importing the store from the configured store module
import { store } from "./configureStore";

// Defining the RootState type based on the state of the store
export type RootState = ReturnType<typeof store.getState>;

// Defining the AppDispatch type as the dispatch function type of the store
export type AppDispatch = typeof store.dispatch;
