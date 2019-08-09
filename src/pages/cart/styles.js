import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
import { colors } from "~/styles";

export const Main = styled.SafeAreaView`
  background-color: #0a2030;
  flex: 1;
  flex-direction: column;
`;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator`
  color: #fff;
`;

export const LoadingText = styled.Text`
  color: ${colors.regular};
  margin-top: 10px;
  font-size: 12px;
`;

export const Header = styled.View`
  height: 80px;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const Refresh = styled.TouchableOpacity``;

export const RefreshIcon = styled(Icon)``;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  flex: 1;
`;

export const TotalPrice = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonOrderFinish = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #e52a3e;
  padding: 8px;
  border-radius: 15px;
  width: 170px;
  justify-content: space-around;
  opacity: ${props => (props.isEmptyCart ? 0.3 : 1)};
`;

export const ButtonOrderFinishIcon = styled(Icon)``;

export const ButtonOrderFinishText = styled.Text`
  font-size: 13px;
  letter-spacing: 0.1;
  color: #fff;
  text-transform: uppercase;
`;

export const ButtonProductAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  border-radius: 50px;
  width: 30px;
`;

export const ButtonProductAddIcon = styled(Icon)``;
