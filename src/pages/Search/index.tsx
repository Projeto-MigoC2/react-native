import { useQuery } from "@tanstack/react-query";
import { Skeleton, Text } from "native-base";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchComponents/SearchBar";
import { api } from "../../services/api";
import Conteudo from "../../types/conteudo";
import theme from "../../utils/Theme";
import {
  Container,
  SearchContainer,
  SearchList,
  SearchListItem,
  SearchListItemTitle,
} from "./styles";
import Header from "../../components/global/Header";
import { expressoes } from "../../utils/expressoes";
import ExpressionKeyboard from "../../components/CustomKeyboard";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Conteudo[]>([]);

  async function fetchResults(text: string): Promise<Conteudo[]> {
    const formattedText = encodeURIComponent(text);
    const response = await api.get(`conteudos/pesquisa?texto=${formattedText}`);
    console.log(expressoes[text]);
    return response.data;
  }

  const { data, error, fetchStatus, isLoading } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => fetchResults(searchText),
    enabled: searchText.length > 0,
  });

  function handleSearch(text: string) {
    setSearchText(text);
  }

  useEffect(() => {
    if (data) {
      setResults(data);
    }
    // console.log("carregando:" + isLoading);
  }, [data]);

  const reqError = error as Error;

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Header title="Pesquisar" />

      <SearchContainer>
        <>
          <SearchBar searchFunction={handleSearch} />
          {/* render search results */}
          {fetchStatus != "idle" && isLoading && (
            <SearchList>
              {[1, 2, 3, 4, 5].map((item) => (
                <SearchListItem shadow={4} key={item}>
                  <Skeleton height={10} />
                </SearchListItem>
              ))}
            </SearchList>
          )}
          {reqError && <Text>Error: {reqError.message}</Text>}
          {results && (
            <SearchList>
              {results.map((result: Conteudo) => (
                <SearchListItem shadow={4} key={result.id}>
                  <SearchListItemTitle>{result.nome}</SearchListItemTitle>
                </SearchListItem>
              ))}
            </SearchList>
          )}
          <ExpressionKeyboard />
        </>
      </SearchContainer>
    </Container>
  );
}
