import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 4px;
  flex-direction: column;
  flex: 1;
  margin: 2px;
  height: 180px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Content = styled.View`
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;
