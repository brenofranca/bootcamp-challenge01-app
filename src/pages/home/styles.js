import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Main = styled.SafeAreaView`
  background-color: #0a2030;
  flex: 1;
  flex-direction: column;
`;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;

export const Header = styled.View`
  height: 80px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Refresh = styled.TouchableOpacity``;

export const RefreshIcon = styled(Icon)``;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const Cart = styled.TouchableOpacity``;

export const CartIcon = styled(Icon)``;

export const Content = styled.View`
  flex: 2;
`;
