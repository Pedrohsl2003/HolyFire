export interface ItemConteudo {
  id: string;
  imagemCard: string;
  imagemBanner: string;
  tema: string;
  resumo: string;
  local?: string;
  horario?: string;
  ministrante?: string;
  data: string; 
}

export const cultos: ItemConteudo[] = [
  {
    id: '1',
    imagemCard: '../src/assets/CongressoOnFire.jpeg',
    imagemBanner: '../src/assets/CongressoOnFire.jpeg',
    tema: 'Tema do Culto 1',
    resumo: 'Resumo do Culto 1',
    local: 'Local do Culto 1',
    horario: 'Horário do Culto 1',
    ministrante: 'Ministrante do Culto 1',
    data: '2024-08-26',
  },
  // Outros cultos...
];

export const series: ItemConteudo[] = [
  // Dados das séries...
];

export const treinamentos: ItemConteudo[] = [
  // Dados dos treinamentos...
];

export const especiais: ItemConteudo[] = [
  // Dados dos especiais...
];
