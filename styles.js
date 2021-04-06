import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const MovieImage = styled.Image`
  width: 50;
  height: 50;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const MovieItemStyled = styled.Text`
  /* color: ${(props) => props.theme.mainColor}; */
  color: darkred;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 10;
  width: 100%;
`;
