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
  Header,
  HeaderText,
  SearchContainer,
  SearchList,
  SearchListItem,
  SearchListItemTitle,
} from "./styles";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  async function fetchResults(text: string) {
    const formattedText = encodeURIComponent(text);
    const response = await api.get(`conteudos/pesquisa?texto=${formattedText}`);
    return response;
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
    setResults(data?.data);
    // console.log("carregando:" + isLoading);
  }, [data]);

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.primaryColor,
          width: "100%",
        }}
      />
      <Header>
        <HeaderText>Pesquisar</HeaderText>
      </Header>

      <SearchContainer>
        <>
          <SearchBar searchFunction={handleSearch} />
          {/* render search results */}
          {fetchStatus != "idle" && isLoading && (
            <SearchList>
              {[1, 2, 3, 4, 5].map((item) => (
                <SearchListItem key={item}>
                  <Skeleton height={10} />
                </SearchListItem>
              ))}
            </SearchList>
          )}
          {error && <Text>Error: {error.message}</Text>}
          {results && (
            <SearchList>
              {results.map((result: Conteudo) => (
                <SearchListItem key={result.id}>
                  <SearchListItemTitle>{result.nome}</SearchListItemTitle>
                </SearchListItem>
              ))}
            </SearchList>
          )}
        </>
      </SearchContainer>
    </Container>
  );
}
