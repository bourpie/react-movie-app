import create from "zustand";
import createMovieSlice from "./slices/createMovieSlice";

const useStore = create((set, get) => ({
    ...createMovieSlice(set, get),
}));

export default useStore;