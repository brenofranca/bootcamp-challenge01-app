import React, { useState } from "react";

import { StatusBar } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Creators as LoginCreators } from "~/store/ducks/login";

import { Pages } from "~/routes";

import {
  Container,
  ImageBackground,
  Form,
  Logo,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  ButtonSubmitText,
  ButtonSignUp,
  ButtonSignUpText,
  LinearGradientStyle
} from "./styles";

import LinearGradient from "react-native-linear-gradient";

const Main = ({ navigation, loginRequest }) => {
  const [auth, setAuth] = useState({
    username: "franciscobreno.si@gmail.com",
    password: "secret"
  });

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />

      <ImageBackground
        source={require("../../assets/images/fundo.jpg")}
        resizeMode="cover"
      />

      <LinearGradient
        colors={["rgba(3,3,3,0.4)", "#000"]}
        style={{ ...LinearGradientStyle }}
      />

      <Form>
        <Logo
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />

        <InputEmail
          emailAddress
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
          underlineColorAndroid="transparent"
          value={auth.username}
          onChangeText={username => setAuth({ ...auth, username })}
        />

        <InputPassword
          eturnKeyType="Entrar"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          underlineColorAndroid="transparent"
          value={auth.password}
          onChangeText={password => setAuth({ ...auth, password })}
        />

        <ButtonSubmit onPress={() => loginRequest(auth)}>
          <ButtonSubmitText>Entrar</ButtonSubmitText>
        </ButtonSubmit>

        <ButtonSignUp onPress={() => navigation.navigate(Pages.SignUp)}>
          <ButtonSignUpText>Criar conta gratuita</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...LoginCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
