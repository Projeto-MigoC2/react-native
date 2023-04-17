import theme from "../../../utils/Theme";
import { ChevronRight, Container, IconContainer, SearchInput } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

interface IsearchBarProps {
  searchFunction: (text: string) => void;
}

export default function SearchBar({ searchFunction }: IsearchBarProps) {
  const [value, setValue] = useState("");
  return (
    <Container>
      <SearchInput
        placeholder="Buscar conteúdo"
        placeholderTextColor={theme.colors.placeholderColor}
        InputLeftElement={
          <MaterialIcons
            name="search"
            size={25}
            color={theme.colors.lightFontColor}
          />
        }
        value={value}
        onChangeText={(text) => setValue(text)}
        InputRightElement={
          <IconContainer>
            <ChevronRight
              name="chevron-right"
              size={20}
              color={theme.colors.lightFontColor}
              onPress={() => searchFunction(value)}
            />
          </IconContainer>
        }
      />
    </Container>
  );
}
