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
    imagemBanner: 'https://via.placeholder.com/1080x608?text=Congresso+OnFire',
    tema: 'Congresso OnFire',
    resumo: 'Resumo do Congresso OnFire',
    local: 'Local do Congresso OnFire',
    horario: 'Horário do Congresso OnFire',
    ministrante: 'Ministrante do Congresso OnFire',
    data: '2024-08-26',
  },
  {
    id: '2',
    imagemCard: 'https://via.placeholder.com/300x200?text=Imersao+De+Casais',
    imagemBanner: 'https://via.placeholder.com/1080x608?text=Imersao+De+Casais',
    tema: 'Imersão De Casais',
    resumo: 'Resumo da Imersão De Casais',
    local: 'Local da Imersão De Casais',
    horario: 'Horário da Imersão De Casais',
    ministrante: 'Ministrante da Imersão De Casais',
    data: '2024-09-15',
  },
  {
    id: '3',
    imagemCard: 'https://via.placeholder.com/300x200?text=Culto+De+Homens',
    imagemBanner: 'https://via.placeholder.com/1080x608?text=Culto+De+Homens',
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
  // Dados dos cultos...
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

// Programação Semanal
export const weeklySchedule: { [key: string]: string } = {
  'Terça Feira': 'TADEL - 20h30',
  'Sábado - Manhã': '09h00 Escola de Líderes',
  'Quarta Feira': '20h00 - Célula',
  'Sábado - Noite': 'Célula de Jovens - 19h00',
  'Quinta Feira': '20h00 Escola do Espírito',
  'Domingo': '09h00, 17h00, 19h00 - Culto de Celebração',
};
