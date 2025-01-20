import { parse } from 'csv-parse';
import { analyzeLeadAndGenerateEmail } from './openai';
import { sendEmail } from './email';

export async function processLeadsList(fileContent: string) {
  const records = [];
  const parser = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  for await (const record of parser) {
    try {
      // Analyze lead and generate personalized email
      const emailContent = await analyzeLeadAndGenerateEmail(record);
      
      // Send the email
      if (emailContent && record.email) {
        await sendEmail(
          record.email,
          'Personalized Offer for Your Business',
          emailContent
        );
      }

      records.push({
        ...record,
        status: 'processed',
        error: null
      });
    } catch (error) {
      records.push({
        ...record,
        status: 'failed',
        error: error.message
      });
    }
  }

  return records;
}