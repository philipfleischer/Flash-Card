import fs from 'fs/promises';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

/**
 * Extract text from PDF file
 * @param {string} filePath - Path to PDF file
 * @returns {Promise<{text: string, numPages: number, info?: any}>}
 */
export const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath);

    // PDFParse forventer Uint8Array
    const parser = new PDFParse(new Uint8Array(dataBuffer));

    // I din pakke ser det ut som API'et er .getText()
    const data = await parser.getText();

    return {
      text: data?.text || '',
      numPages: data?.numPages || 0,
      info: data?.info,
    };
  } catch (error) {
    console.log('PDF parsing error (raw):', error);
    throw new Error(`Failed to extract text from PDF: ${error?.message || String(error)}`);
  }
};

//GAMMEL:
// import { PDFParse } from 'pdf-parse';

// /**
//  * Extract text from PDF file
//  * @param {string} filePath - Path to PDF file
//  * @returns {Promise<{text: string, numPages: number}>}
//  */
// export const extractTextFromPDF = async (filePath) => {
//   try {
//     // pdf-parse expects a Uint8Array, not a buffer
//     const parser = new PDFParse(new Uint8Array(dataBuffer));
//     const data = await parser.getText();

//     return {
//       text: data.text,
//       numPages: data.numPages,
//       info: data.info,
//     };
//   } catch (error) {
//     console.log('PDF parsing error:', error);
//     throw new Error('Failed to extract text from PDF');
//   }
// };
