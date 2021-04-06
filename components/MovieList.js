import movieStore from "../stores/movieStore";
import MovieItem from "./MovieItem";
import { List, Content } from "native-base";
import { observer } from "mobx-react";
import React from "react";
import { Text, View } from "react-native";

const MovieList = ({ movies }) => {
  if (movieStore.loading) return <Text>Loading...</Text>;
  const movieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  return (
    <View>
      <List>{movieList}</List>
      <Text>list rendered here</Text>
    </View>
  );
};

export default observer(MovieList);
