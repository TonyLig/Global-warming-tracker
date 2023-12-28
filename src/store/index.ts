// Exporting the default store from the configured store module
export { store as default } from "./configureStore";

// Exporting types related to the Redux store for external use
export type { RootState, AppDispatch } from "./types";
