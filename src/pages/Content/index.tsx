import { useQuery } from "@tanstack/react-query";
import Header from "../../components/global/Header";
import Conteudo from "../../types/conteudo";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Text } from "native-base";
import MathJax from "react-native-mathjax";

interface ContentProps {
  route: {
    params: {
      ContentName: string;
    };
  };
  // navigation: navigat
}

const mmlOptions = {
  messageStyle: "none",
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
  },
  TeX: {
    extensions: [
      "AMSmath.js",
      "AMSsymbols.js",
      "noErrors.js",
      "noUndefined.js",
    ],
  },
};

export default function Content({ route }: ContentProps) {
  const { ContentName } = route.params;

  const [body, setBody] = useState<string>("");

  async function fetchConteudo(name: string): Promise<Conteudo> {
    const parsedName = encodeURIComponent(name);
    const response = await api.get(`conteudos/${parsedName}`);
    return response.data;
  }

  const { data, error, fetchStatus, isLoading } = useQuery({
    queryKey: [` conteudo ${ContentName}`],
    queryFn: () => fetchConteudo(ContentName),
  });

  useEffect(() => {
    if (data) {
      setBody(data.corpo);
    }
  }, [data]);

  return (
    <Container>
      <Header title={ContentName} />

      {isLoading && <Text>Carregando...</Text>}

      {body && <MathJax mathJaxOptions={mmlOptions} html={body} />}
    </Container>
  );
}
