import { readFileSync } from 'fs';
import { processLeadsList } from './services/leadProcessor';

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.log('Usage: npm run process-leads -- <path-to-csv-file>');
    process.exit(1);
  }

  const csvPath = args[0];
  
  try {
    console.log('Reading CSV file...');
    const fileContent = readFileSync(csvPath, 'utf-8');
    
    console.log('Processing leads...');
    const results = await processLeadsList(fileContent);
    
    console.log('\nProcessing Results:');
    console.log('-------------------');
    results.forEach((result, index) => {
      console.log(`\nLead ${index + 1}:`);
      console.log(`Status: ${result.status}`);
      console.log(`Name: ${result.name}`);
      console.log(`Email: ${result.email}`);
      if (result.error) {
        console.log(`Error: ${result.error}`);
      }
    });
    
    const successful = results.filter(r => r.status === 'processed').length;
    const failed = results.filter(r => r.status === 'failed').length;
    
    console.log('\nSummary:');
    console.log(`Total leads processed: ${results.length}`);
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);
    
  } catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
  }
}

main().catch(console.error);