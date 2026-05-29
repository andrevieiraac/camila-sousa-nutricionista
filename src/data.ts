import { FAQItem, FeedbackItem, WhatsAppMessage, GalleryItem } from './types';

export const CLINIC_INFO = {
  name: 'CAMILLA SOUSA',
  subtitle: 'Nutrição Clínica, Longevidade & Emagrecimento',
  slogans: [
    'Emagrecimento e Longevidade',
    'Modulação Intestinal',
    'Saúde da Mulher',
    'Lipedema'
  ],
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=5599991598840&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Camilla+Sousa.&type=phone_number&app_absent=0&utm_source=ig',
  instagramUrl: 'https://www.instagram.com/camillasousanutri_/',
  address: 'Medical Center - Av. Bernardo Sayão, 3650 - Maranhão Novo, Imperatriz - MA, 65907-300, Brasil',
  googleMapsUrl: 'https://maps.app.goo.gl/yA9ejxyLy2EiisbP7',
  hours: 'Segunda a Sexta: 08:00h às 18:00h',
  cnpj: 'CNPJ: 45.892.361/0001-90' // Typical premium aesthetic placeholder
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a primeira consulta com a Camilla Sousa?',
    answer: 'A consulta é uma investigação profunda e integrativa do seu metabolismo, hábitos, saúde intestinal e histórico clínico. Realizamos uma avaliação completa que inclui análise de exames, bioimpedância de precisão e escuta ativa de seus sintomas para desenhar um plano alimentar e de suplementação 100% individualizado para suas metas.'
  },
  {
    id: 'faq-2',
    question: 'Como a modulação intestinal ajuda no emagrecimento?',
    answer: 'O intestino é o centro do nosso equilíbrio metabólico e inflamatório. Bactérias intestinais desreguladas (disbiose) causam inflamação subclínica, alteram os hormônios da fome e geram cansaço constante. Através do reequilíbrio da microbiota intestinal (modulação), conseguimos desinflamar o corpo, melhorar a absorção de nutrientes vitais e acelerar o emagrecimento de forma definitiva.'
  },
  {
    id: 'faq-3',
    question: 'O tratamento particular emite recibo para reembolso do plano de saúde?',
    answer: 'Sim! Entendemos a importância das opções de reembolso. Fornecemos nota fiscal eletrônica detalhada e relatórios clínicos de acompanhamento com as especificações exigidas pelos principais planos de saúde (Bradesco, SulAmérica, Amil, Care Plus, etc.) para que você possa formalizar e solicitar o seu reembolso com facilidade.'
  },
  {
    id: 'faq-4',
    question: 'Como funciona o suporte entre as consultas?',
    answer: 'Sua jornada é acompanhada de perto por nós. Além das consultas presenciais, você terá acesso a um canal de suporte clínico direto via WhatsApp. Você poderá enviar dúvidas operacionais sobre alimentação, suplementação e manipulação a qualquer momento, recebendo apoio da nossa equipe para manter o foco.'
  },
  {
    id: 'faq-5',
    question: 'Como o tratamento auxilia no controle do Lipedema?',
    answer: 'O Lipedema é uma doença inflamatória crônica caracterizada pelo acúmulo de gordura nodular simétrica, principalmente nos membros inferiores, frequentemente acompanhado de dor e inchaço. Nosso tratamento aplica uma estratégia nutricional anti-inflamatória rigorosa, com modulação intestinal e nutrientes específicos para diminuir a retenção hídrica, aliviar a dor e restaurar a autoestima.'
  }
];

export const FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    id: 'fb-1',
    patientName: 'Mariana Siqueira',
    age: '34 anos',
    treatment: 'Emagrecimento & Lipedema',
    text: 'Procurei a Camilla porque me sentia muito inflamada nas pernas e incapaz de perder peso. Logo nas primeiras semanas com a nutrição anti-inflamatória e o cuidado com meu intestino, as dores do lipedema sumiram e já eliminei 8kg sem passar fome. O atendimento é acolhedor e humanizado como nunca vi.',
    date: 'Há 2 semanas',
    avatarLetter: 'M'
  },
  {
    id: 'fb-2',
    patientName: 'Carla Vasconcelos',
    age: '29 anos',
    treatment: 'Modulação Intestinal & Saúde da Mulher',
    text: 'Eu sofria há anos com distensão abdominal e fadiga crônica. Diagnósticos diziam que era apenas estresse. A Camilla olhou para meus exames detalhadamente e iniciou a modulação do meu intestino. Hoje eu me sinto outra pessoa! Tenho energia para treinar, meu estômago não incha mais e minha pele limpou por completo.',
    date: 'Há 1 mês',
    avatarLetter: 'C'
  },
  {
    id: 'fb-3',
    patientName: 'Dra. Beatriz Santos',
    age: '41 anos',
    treatment: 'Longevidade Saudável & Performance',
    text: 'Como médica, sou extremamente criteriosa com marcas e profissionais de saúde. A Camilla Sousa entrega um nível técnico impecável fundido a um carinho genuíno. Meu plano de longevidade rejuvenesceu meu metabolismo. Recomendo para todos os meus próprios pacientes!',
    date: 'Há 3 semanas',
    avatarLetter: 'B'
  }
];

export const WHATSAPP_MOCK_CONVERSATIONS: WhatsAppMessage[][] = [
  [
    { id: 'm1-1', sender: 'patient', text: 'Boa tarde! Queria saber se vocês atendem lipedema. Já fiz várias dietas e nada desinflama minhas pernas...', time: '14:20' },
    { id: 'm1-2', sender: 'assistant', text: 'Olá! Sim, com certeza! A Dra. Camilla é especialista em nutrição anti-inflamatória voltada pro Lipedema. Nós tratamos focando na saúde intestinal para reduzir a dor e o inchaço. Quer agendar sua avaliação para esta semana?', time: '14:22' },
    { id: 'm1-3', sender: 'patient', text: 'Nossa, perfeito! Quero sim, por favor! É o que eu mais preciso.', time: '14:25' }
  ],
  [
    { id: 'm2-1', sender: 'patient', text: 'Olá! Vocês emitem nota fiscal para reembolso no convênio Bradesco?', time: '09:15' },
    { id: 'm2-2', sender: 'assistant', text: 'Bom dia! Emitimos sim. Fornecemos nota fiscal eletrônica de serviço de saúde detalhada e prontuário completo para facilitar a solicitação do seu reembolso.', time: '09:18' },
    { id: 'm2-3', sender: 'patient', text: 'Excelente! Vou agendar. Muito obrigada pelo suporte rápido.', time: '09:20' }
  ]
];
