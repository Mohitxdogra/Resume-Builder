declare module 'react-to-pdf' {
  interface PDFOptions {
    filename?: string;
    page?: {
      format?: string;
      orientation?: 'portrait' | 'landscape';
    };
  }

  export function toPDF(
    ref: React.RefObject<HTMLElement>,
    options?: PDFOptions
  ): Promise<void>;
} 