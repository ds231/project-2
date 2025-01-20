import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import * as dotenv from 'dotenv';

dotenv.config();

const endpoint = import.meta.env.VITE_AZURE_OPENAI_TARGET_URL;
const azureApiKey = import.meta.env.VITE_AZURE_OPENAI_KEY;
const deploymentName = import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT_NAME || 'gama';

const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));

export async function analyzeLeadAndGenerateEmail(leadData: any) {
  try {
    const messages = [
      { role: "system", content: "You are an expert sales assistant. Analyze the lead data and create a personalized email that highlights relevant value propositions." },
      { role: "user", content: `Generate a personalized sales email for this lead: ${JSON.stringify(leadData)}` }
    ];

    const result = await client.getChatCompletions(deploymentName, messages);
    return result.choices[0].message?.content;
  } catch (error) {
    console.error('Error generating email:', error);
    throw error;
  }
}