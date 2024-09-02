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

export const eventos: ItemConteudo[] = [
  {
    id: '1',
    imagemCard: '../src/assets/CongressoOnFire.jpeg',
    imagemBanner: '../src/assets/CongressoOnFire.jpeg',
    tema: 'Congresso OnFire',
    resumo: 'Resumo do Congresso OnFire',
    local: 'Local do Congresso OnFire',
    horario: 'Horário do Congresso OnFire',
    ministrante: 'Ministrante do Congresso OnFire',
    data: '2024-08-26',
  },
  {
    id: '2',
    imagemCard: '../src/assets/ImersaoCasais.jpeg',
    imagemBanner: '../src/assets/ImersaoCasais.jpeg',
    tema: 'Imersão De Casais',
    resumo: 'Resumo da Imersão De Casais',
    local: 'Local da Imersão De Casais',
    horario: 'Horário da Imersão De Casais',
    ministrante: 'Ministrante da Imersão De Casais',
    data: '2024-09-15',
  },
  {
    id: '3',
    imagemCard: '../src/assets/CultoDeHomens.jpeg',
    imagemBanner: '../src/assets/CultoDeHomens.jpeg',
    tema: 'Culto De Homens',
    resumo: 'Resumo do Culto De Homens',
    local: 'Local do Culto De Homens',
    horario: 'Horário do Culto De Homens',
    ministrante: 'Ministrante do Culto De Homens',
    data: '2024-09-22',
  },
  // Outros eventos...
];

export const cultos: ItemConteudo[] = [
  {
    id: '1',
    imagemCard: '../src/assets/CongressoOnFire.jpeg',
    imagemBanner: '../src/assets/CongressoOnFire.jpeg',
    tema: 'Culto de Exemplo 1',
    resumo: 'Resumo do Culto de Exemplo 1',
    local: 'Local do Culto de Exemplo 1',
    horario: 'Horário do Culto de Exemplo 1',
    ministrante: 'Ministrante do Culto de Exemplo 1',
    data: '2024-10-01',
  },
  // Outros cultos...
];

export const series: ItemConteudo[] = [
  {
    id: '1',
    imagemCard: '../src/assets/CongressoOnFire.jpeg',
    imagemBanner: '../src/assets/CongressoOnFire.jpeg',
    tema: 'Série de Exemplo 1',
    resumo: 'Resumo da Série de Exemplo 1',
    local: 'Local da Série de Exemplo 1',
    horario: 'Horário da Série de Exemplo 1',
    ministrante: 'Ministrante da Série de Exemplo 1',
    data: '2024-11-01',
  },
  // Outras séries...
];

export const treinamentos: ItemConteudo[] = [
  {
    id: '1',
    imagemCard: '../src/assets/CongressoOnFire.jpeg',
    imagemBanner: '../src/assets/CongressoOnFire.jpeg',
    tema: 'Treinamento de Exemplo 1',
    resumo: 'Resumo do Treinamento de Exemplo 1',
    local: 'Local do Treinamento de Exemplo 1',
    horario: 'Horário do Treinamento de Exemplo 1',
    ministrante: 'Ministrante do Treinamento de Exemplo 1',
    data: '2024-12-01',
  },
  // Outros treinamentos...
];

export const especiais: ItemConteudo[] = [
  {
    id: '1',
    imagemCard: '../src/assets/CongressoOnFire.jpeg',
    imagemBanner: '../src/assets/CongressoOnFire.jpeg',
    tema: 'Especial de Exemplo 1',
    resumo: 'Resumo do Especial de Exemplo 1',
    local: 'Local do Especial de Exemplo 1',
    horario: 'Horário do Especial de Exemplo 1',
    ministrante: 'Ministrante do Especial de Exemplo 1',
    data: '2024-12-15',
  },
  // Outros especiais...
];

// Programação Semanal
export const semanal: { [key: string]: string } = {
  'TADEL': 'Terça Feira - 20h30',
  'Escola de Líderes': 'Sábado - 09h00 ',
  'Célula': 'Quarta Feira - 20h00',
  'Célula de Jovens': 'Sábado - 19h00',
  'Escola do Espírito': 'Quinta Feira - 20h00 ',
  'Culto de Celebração': 'Domingo - 09h00, 17h00, 19h00',
};

export interface Profile {
  name: string;
  image: string;
  description: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export const profiles: Profile[] = [
  {
    name: 'Ataíde & Cida',
    image: 'https://via.placeholder.com/500x500',
    description: 'Pastores Fundadores',
    facebook: '/',
    instagram: '/',
    youtube: '/',
  },
  {
    name: 'Gustavo & Renata',
    image: 'https://via.placeholder.com/500x500',
    description: 'Pastores de Casais',
    facebook: '/',
    instagram: '/',
  },
  {
    name: 'Nelci',
    image: 'https://via.placeholder.com/500x500',
    description: 'Pastora',
    facebook: '/',
    instagram: '/',
  },
  {
    name: 'Denis & Daiane',
    image: 'https://via.placeholder.com/500x500',
    description: 'Pastores de Jovens',
    facebook: '/',
    instagram: '/',
  },
];  