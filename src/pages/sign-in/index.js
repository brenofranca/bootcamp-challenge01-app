import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { StatusBar } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";

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

const Main = ({ navigation, loginRequest, loginAttempt }) => {
  const [auth, setAuth] = useState({
    username: "franciscobreno.si@gmail.com",
    password: "secret"
  });

  const [userAuthenticated, setUserAuthenticated] = useState({
    checked: false,
    logged: false,
    data: {}
  });
  useEffect(() => {
    async function fetchUserAuthenticated() {
      const dataPersistedLogin = await AsyncStorage.getItem("@login");

      if (!!dataPersistedLogin) {
        const dataLogin = JSON.parse(dataPersistedLogin);

        loginAttempt(dataLogin);
      }
    }

    fetchUserAuthenticated();
  }, []);

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

        <ButtonSignUp onPress={() => navigation.navigate(Pages.SignUpScreen)}>
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
