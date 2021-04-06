import { ListItem } from "native-base";
import React from "react";
import { Text, View, Image } from "react-native";

// Styling
// import { ImageBackground } from "react-native";
import {
  MovieImage,
  HomeBackground,
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyled,
  MovieItemStyled,
} from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <>
      <ListItem>
        <MovieImage source={{ uri: movie.image }} />
        <MovieItemStyled>
          {" "}
          {movie.name}, {movie.year}{" "}
        </MovieItemStyled>
      </ListItem>
    </>
  );
  // return <Text> movie Item </Text>;
};

export default MovieItem;
