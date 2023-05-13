import { useNavigation } from "@react-navigation/native";
import Header from "../../components/global/Header";
import theme from "../../utils/Theme";
import {
  Container,
  ListContainer,
  PressableBox,
  SettingsIcon,
  SettingsItemBox,
  SettingsItemText,
} from "./styles";

export default function SettingsPage() {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Ajustes" />

      <Container>
        <ListContainer space={4} alignItems="center">
          {/* transformar em um componente proprio */}
          <PressableBox
            onPress={() => navigation.navigate("About")}
            rounded="8"
            overflow="hidden"
            shadow="3"
          >
            <SettingsItemBox>
              <SettingsIcon
                name="info"
                size={20}
                color={theme.colors.secondaryColor}
              />
              <SettingsItemText>Sobre</SettingsItemText>
            </SettingsItemBox>
          </PressableBox>
        </ListContainer>
      </Container>
    </>
  );
}
