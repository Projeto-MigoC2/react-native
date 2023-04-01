import * as React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../../utils/Theme";
import { Header, HeaderText, Image, ImageContainer } from "./styles";
export default function Home() {
  return (
    <View>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.primaryColor,
        }}
      />
      <Header>
        <HeaderText>Início</HeaderText>
      </Header>

      <ImageContainer>
        <Image source={require("../../assets/migo_computer.png")} />
      </ImageContainer>
    </View>
  );
}
