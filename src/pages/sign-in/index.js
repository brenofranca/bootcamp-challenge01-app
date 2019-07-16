import React, { useState } from "react";

import { StatusBar } from "react-native";

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

const Main = () => {
  const [auth, setAuth] = useState({ email: "", password: "" });

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
          value={auth.email}
          onChangeText={email => setAuth({ ...auth, email })}
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

        <ButtonSubmit>
          <ButtonSubmitText>Entrar</ButtonSubmitText>
        </ButtonSubmit>

        <ButtonSignUp>
          <ButtonSignUpText>Criar conta gratuita</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  );
};

export default Main;
