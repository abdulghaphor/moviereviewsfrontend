import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { List } from "native-base";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList";
import movieStore from "./stores/movieStore";

// const moviesTestArray = [
//   {
//     name: "Home Alone",
//     image: "https://alwafd.org/images/images/14(645).jpg",
//     year: 1993,
//     genre: "comedy",
//     description: "comedy Story",
//     rating: 9,
//     userId: 1,
//   },

//   {
//     name: "Home Alone 2",
//     image: "https://alwafd.org/images/images/14(645).jpg",
//     year: 1993,
//     genre: "comedy",
//     description: "comedy Story",
//     rating: 9,
//     userId: 2,
//   },
// ];

const theme = {
  light: {
    mainColor: "darkred", // main font color
    backgroundColor: "white", // main background color
    otherColor: "grey",
    buttonTitle: "Dark Mode",
    red: "#ff3232",
  },

  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    otherColor: "grey",
    buttonTitle: "Light Mode",
    red: "#ff3232",
  },
};

export default function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      <ThemeProvider theme={theme.dark}>
        <Home />
        <MovieList />
        {/* <MovieList movies={moviesTestArray} /> */}
        <Text> App.js: list rendered above</Text>
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
    /* </NavigationContainer> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
