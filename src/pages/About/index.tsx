import { Heading } from "native-base";
import Header from "../../components/global/Header";
import {
  Container,
  DescriptionContainer,
  DescriptionText,
  Footer,
  FooterImage1,
  FooterImage2,
  FooterImagesContainer,
  FooterText,
  ImageContainer,
  MigoImage,
  ParticipantCard,
  ParticipantImage,
  ParticipantInfo,
  ParticipantName,
  ParticipantRole,
  ParticipantsContainer,
  TitleContainer,
} from "./styles";
import theme from "../../utils/Theme";

interface Participant {
  name: string;
  picture: any;
  role: string;
}

export default function About() {
  const description =
    "O migoC2 é um app desenvolvido por estudantes da Universidade de Brasília - Faculdade do Gama para facilitar a aprendizagem na disciplina de Cálculo 2. Esse app foi financiado pelo Programa Aprendizagem para o 3º Milênio (A3M), que tem como objetivo atuar junto à comunidade da Universidade de Brasília na identificação, valorização e promoção de ações educacionais inovadoras, visando disponibilizar um portfólio sustentável de metodologias, processos e aplicativos para uso nos cursos da universidade.";

  const participants: Participant[] = [
    {
      name: "Luiza Yoko Taneguti",
      picture: require("../../assets/yoko.jpg"),
      role: "Coordenadora",
    },
    {
      name: "Leonardo Lago Moreno",
      picture: require("../../assets/leonardo.jpg"),
      role: "Desenvolvedor",
    },
    {
      name: "Guilherme Daniel Fernandes da Silva",
      picture: require("../../assets/guilherme.jpeg"),
      role: "Desenvolvedor",
    },
    {
      name: "Victório Lázaro Rocha de Morais",
      picture: require("../../assets/victorio.jpg"),
      role: "Desenvolvedor",
    },
    {
      name: "Vitor Cruz de Oliveira",
      picture: require("../../assets/vitor.jpeg"),
      role: "Criador de conteúdo",
    },
    {
      name: "Luciano Freitas Melo",
      picture: require("../../assets/luciano.jpeg"),
      role: "Criador de conteúdo",
    },
  ];

  return (
    <>
      <Header title="Sobre" />
      <Container contentContainerStyle={{ alignItems: "center" }}>
        <ImageContainer>
          <MigoImage source={require("../../assets/migo_computer.png")} />
        </ImageContainer>

        <DescriptionContainer shadow={4}>
          <DescriptionText>{description}</DescriptionText>
        </DescriptionContainer>

        <TitleContainer>
          <Heading color={theme.colors.primaryColor}>Integrantes</Heading>
        </TitleContainer>

        <ParticipantsContainer space={4}>
          {participants.map((participant) => {
            return (
              <ParticipantCard key={participant.name} shadow={4}>
                <ParticipantImage
                  size={100}
                  borderRadius={80}
                  source={participant.picture}
                  alt="awdad"
                />
                <ParticipantInfo>
                  <ParticipantName>{participant.name}</ParticipantName>

                  <ParticipantRole>{participant.role}</ParticipantRole>
                </ParticipantInfo>
              </ParticipantCard>
            );
          })}
        </ParticipantsContainer>
        <Footer>
          <FooterImagesContainer>
            <FooterImage1 source={require("../../assets/unb_logo.jpg")} />
            <FooterImage2 source={require("../../assets/logo_a3m.png")} />
          </FooterImagesContainer>
        </Footer>
      </Container>
    </>
  );
}
