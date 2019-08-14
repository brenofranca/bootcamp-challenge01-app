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
`;

export const Refresh = styled.TouchableOpacity``;

export const RefreshIcon = styled(Icon)``;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Cart = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled(Icon)`
  margin-bottom: 1px;
`;

export const Content = styled.View`
  flex: 2;
`;
