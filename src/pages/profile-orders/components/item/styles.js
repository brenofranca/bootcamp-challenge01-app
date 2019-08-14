import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 4px;
  flex-direction: row;
  height: 80px;
  margin-bottom: 10px;
  padding: 10px;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #0b2031;
  letter-spacing: 0;
`;

export const Date = styled.Text`
  font-size: 11px;
  color: #706e7b;
  line-height: 14px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
  margin-top: 10px;
`;
