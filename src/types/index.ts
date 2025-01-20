export interface Lead {
  email: string;
  name: string;
  company: string;
  position?: string;
  industry?: string;
  [key: string]: any;
}

export interface ProcessedLead extends Lead {
  status: 'processed' | 'failed';
  error?: string | null;
}

export interface EmailTemplate {
  subject: string;
  content: string;
}