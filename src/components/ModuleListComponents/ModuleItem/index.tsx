import { useState } from "react";
import Modulo from "../../../types/modulo";
import {
  ContentList,
  ContentName,
  ExpandIcon,
  ModuleContainer,
  ModuleHeader,
  ModuleName,
} from "./styles";
import { Box, Pressable } from "native-base";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function ModuleItem({ modulo }: { modulo: Modulo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpandIcon() {
    if (isExpanded) {
      return <ExpandIcon name="expand-less" size={24} />;
    }
    return <ExpandIcon name="expand-more" size={24} />;
  }

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <ModuleContainer shadow={4}>
      <Pressable
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <ModuleHeader>
          {handleExpandIcon()}
          <ModuleName>{modulo.nome}</ModuleName>
        </ModuleHeader>
        <ContentList>
          {isExpanded && (
            <>
              {modulo.conteudos.map((conteudo) => (
                <Pressable
                  key={conteudo.id}
                  onPress={() => {
                    navigation.navigate("Content", {
                      ContentName: conteudo.nome,
                    });
                  }}
                >
                  <Box>
                    <ContentName>{conteudo.nome}</ContentName>
                  </Box>
                </Pressable>
              ))}
            </>
          )}
        </ContentList>
      </Pressable>
    </ModuleContainer>
  );
}
