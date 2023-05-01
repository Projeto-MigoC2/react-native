import Conteudo from "./conteudo";



export default interface Modulo {
  id: string;
  nome: string;
  exemplo: string;
  createdAt: Date;
  updatedAt: Date;  
  conteudos: Conteudo[]
} 