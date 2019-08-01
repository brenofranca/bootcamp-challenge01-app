import React, { useState } from "react";

import { StatusBar } from "react-native";

import {
  Container,
  ImageBackground,
  Form,
  Logo,
  InputName,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  ButtonSubmitText,
  ButtonBack,
  ButtonBackText,
  LinearGradientStyle
} from "./styles";

import LinearGradient from "react-native-linear-gradient";

const SignUp = ({ navigation }) => {
  const [account, setAccount] = useState({ name: "", email: "", password: "" });

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

        <InputName
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome Completo"
          underlineColorAndroid="transparent"
          value={account.name}
          onChangeText={name => setAccount({ ...account, name })}
        />

        <InputEmail
          emailAddress
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
          underlineColorAndroid="transparent"
          value={account.email}
          onChangeText={email => setAccount({ ...account, email })}
        />

        <InputPassword
          eturnKeyType="Entrar"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          underlineColorAndroid="transparent"
          value={account.password}
          onChangeText={password => setAccount({ ...account, password })}
        />

        <ButtonSubmit>
          <ButtonSubmitText>Criar conta</ButtonSubmitText>
        </ButtonSubmit>

        <ButtonBack onPress={() => navigation.goBack()}>
          <ButtonBackText>Ja tenho login</ButtonBackText>
        </ButtonBack>
      </Form>
    </Container>
  );
};

export default SignUp;
