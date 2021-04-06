import React from "react";
import { View, Text, Button, StyleSheet, alert } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={Styles.container}>
      <Text>SignUpScreen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
