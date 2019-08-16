import styled from "styled-components/native";

import colors from "~/styles/colors";

import LinearGradient from "react-native-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
  colors: [colors.secondary, colors.primary],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  flex-direction: row;
  padding-top: 60px;
  align-items: center;
  padding-left: 10px;
`;

export const Avatar = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AvatarIcon = styled(Icon).attrs({
  color: "#FFF"
})``;

export const Infos = styled.View`
  margin-left: 10px;
`;

export const UserName = styled.Text`
  color: #fff8f8;
  font-size: 16;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  color: #fff8f8;
  font-size: 13;
`;
