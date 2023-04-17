

export default interface Conteudo {
  id: string;
  nome: string;
  corpo: string;
  tags: string[];
  moduloId: string;
  createdAt: Date;
  updatedAt: Date;
  links: []
}