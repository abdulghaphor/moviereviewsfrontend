import { makeAutoObservable } from "mobx";
import axios from "axios";
import { configure } from "mobx";

//MobX strict mode error fix, from https://stackoverflow.com/questions/64770762/mobx-since-strict-mode-is-enabled-changing-observed-observable-values-withou
configure({
  enforceActions: "never",
});

class MovieStore {
  reviews = [];
  movies = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies = async () => {
    try {
      const res = await axios.get(
        "https://random-data-api.com/api/cannabis/random_cannabis?size=5"
      );
      this.movies = res.data;
      this.loading = false;
      console.log("fetchMovies response", res.data);
    } catch (error) {
      console.error("MovieStore -> fetchMovies -> error", error);
    }
  };
}

const movieStore = new MovieStore();

export default movieStore;
