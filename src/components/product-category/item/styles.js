import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Item = styled.View`
  background-color: #fff;
  border-radius: 4px;
  flex-direction: row;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  flex: 1 auto;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: column;
  flex: 2;
  justify-content: space-around;
  margin-left: 10px;
  padding-vertical: 5px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Description = styled.View`
  flex-direction: row;
`;

export const DescriptionText = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  flex-grow: 1;
  flex: 1;
  margin-top: 5px;
`;

export const Time = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TimeIcon = styled(Icon)``;

export const TimeText = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
  margin-left: 5px;
`;
