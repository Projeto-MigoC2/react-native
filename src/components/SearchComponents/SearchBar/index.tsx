import theme from "../../../utils/Theme";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { ChevronRight, Container, IconContainer, SearchIcon, SearchInput } from "./styles";

interface IsearchBarProps {
  searchFunction: (text: string) => void;
}

// Componente do teclado de fórmulas personalizado
const CustomKeyboard = ({ isOpen, onClose }: any) => {
  // Lógica do teclado personalizado aqui
  const formulas = ["∑", "∫", "√", "∆", "÷", "×", "π"];

  return (
    <Modal visible={isOpen} animationType="slide">
      <View>
        <Text>Selecione uma formula</Text>
        {formulas.map((formula, index) => (
          <TouchableOpacity key={index} onPress={() => onClose(formula)}>
            <Text>{formula}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => onClose(null)}>
          <Text>Fechar Teclado</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default function SearchBar({ searchFunction }: IsearchBarProps) {
  const [value, setValue] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const OpenFunciotions = () => {
    setIsKeyboardOpen(true);
  };

  const handleCloseKeyboard = (selectedFormula: any) => {
    setIsKeyboardOpen(false);
    if (selectedFormula) {
      // Lógica para usar a fórmula selecionada, por exemplo, inserindo-a em um campo de texto
      console.log("Fórmula selecionada:", selectedFormula);
    }
  };

  return (
    <Container>
      <SearchInput
        shadow={4}
        size="md"
        borderRadius={10}
        backgroundColor={theme.colors.lightBoxColor}
        placeholder="Buscar conteúdo"
        placeholderTextColor={theme.colors.placeholderColor}
        InputLeftElement={
          <SearchIcon name="search" size={25} color={theme.colors.lightFontColor} />
        }
        value={value}
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => searchFunction(value)}
        InputRightElement={
          <><IconContainer>
            <ChevronRight
              name="chevron-right"
              size={20}
              color={theme.colors.lightFontColor}
              onPress={() => searchFunction(value)} />
          </IconContainer><IconContainer>
              <ChevronRight
                name="functions"
                size={20}
                color={theme.colors.lightFontColor}
                onPress={OpenFunciotions} />
            </IconContainer></>
        }
      />
      {/* Renderizar o teclado personalizado */}
      {isKeyboardOpen && <CustomKeyboard isOpen={isKeyboardOpen} onClose={handleCloseKeyboard} />}
    </Container>
  );
}
