import * as React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeListItem from "../../components/HomeListItem";
import theme from "../../utils/Theme";
import {
  Container,
  Description,
  DescriptionContainer,
  Image,
  ImageContainer,
  TitleContainer,
  TitlePart1,
  TitlePart2,
  TitlePart3,
  List,
  Footer,
  FooterText,
  FooterImagesContainer,
  FooterImage1,
  FooterImage2,
} from "./styles";
import Header from "../../components/global/Header";
export default function Home() {
  return (
    <>
      <Header title="Início" />
      <Container contentContainerStyle={{ alignItems: "center" }}>
        <ImageContainer>
          <Image source={require("../../assets/migo_happy.png")} />
        </ImageContainer>

        <TitleContainer>
          <TitlePart1>Olá!</TitlePart1>
          <TitlePart2>Sou o Migo</TitlePart2>
          <TitlePart3>C2.</TitlePart3>
        </TitleContainer>

        <DescriptionContainer>
          <Description>Com o MigoC2, você pode:</Description>
          <List>
            <HomeListItem
              iconLib="Feather"
              iconName="search"
              title="Buscar conteúdos de Cálculo 2"
            />
            <HomeListItem
              iconLib="MaterialCommunityIcons"
              iconName="bookshelf"
              title="Acessar conteúdos de Cálculo 2 por módulos"
            />
            <HomeListItem
              iconLib="MaterialCommunityIcons"
              iconName="sigma"
              title="Acessar exercícios resolvidos de forma detalhada"
            />
          </List>
        </DescriptionContainer>

        <Footer>
          <FooterText>Oferecimento:</FooterText>
          <FooterImagesContainer>
            <FooterImage1 source={require("../../assets/unb_logo.jpg")} />
            <FooterImage2 source={require("../../assets/logo_a3m.png")} />
          </FooterImagesContainer>
        </Footer>
      </Container>
    </>
  );
}
