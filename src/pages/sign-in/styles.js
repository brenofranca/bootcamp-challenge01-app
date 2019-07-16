// Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.Image`
  flex: 1;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  padding-horizontal: 20px;
  position: absolute;
`;

export const Logo = styled.Image`
  height: ${Dimensions.get("window").height * 0.08};
  margin-vertical: ${Dimensions.get("window").height * 0.05};
  width: ${Dimensions.get("window").height * 0.11 * (1950 / 662)};
`;

export const InputEmail = styled.TextInput`
  background-color: #fff;
  height: 50px;
  width: 100%;
  border-radius: 7px;
  padding-horizontal: 15px;
`;

export const InputPassword = styled.TextInput`
  background-color: #fff;
  height: 50px;
  width: 100%;
  border-radius: 7px;
  padding-horizontal: 15px;
  margin-vertical: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #e5293e;
  margin-top: 5px;
  width: 100%;
  align-items: center;
  height: 45px;
  border-radius: 7px;
  justify-content: center;
`;

export const ButtonSubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  margin-top: 5px;
  width: 100%;
  align-items: center;
  height: 45px;
  justify-content: center;
`;

export const ButtonSignUpText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const LinearGradientStyle = {
  flex: 1,
  height: "100%",
  width: "100%",
  position: "absolute"
};
