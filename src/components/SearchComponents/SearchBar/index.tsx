import theme from "../../../utils/Theme";
import {
  ChevronRight,
  Container,
  IconContainer,
  SearchIcon,
  SearchInput,
} from "./styles";
import { useState } from "react";

interface IsearchBarProps {
  searchFunction: (text: string) => void;
}

export default function SearchBar({ searchFunction }: IsearchBarProps) {
  const [value, setValue] = useState("");
  return (
    <Container>
      <SearchInput
        size="md"
        borderRadius={10}
        backgroundColor={theme.colors.lightBoxColor}
        placeholder="Buscar conteúdo"
        placeholderTextColor={theme.colors.placeholderColor}
        InputLeftElement={
          <SearchIcon
            name="search"
            size={25}
            color={theme.colors.lightFontColor}
          />
        }
        value={value}
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => searchFunction(value)}
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
