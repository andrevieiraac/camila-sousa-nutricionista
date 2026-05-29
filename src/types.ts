export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeedbackItem {
  id: string;
  patientName: string;
  age?: string;
  treatment: string;
  text: string;
  date?: string;
  avatarLetter: string;
}

export interface WhatsAppMessage {
  id: string;
  sender: 'patient' | 'assistant';
  text: string;
  time: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  spanClass?: string;
}
