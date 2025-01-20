import { EmailClient } from "@azure/communication-email";

const connectionString = import.meta.env.VITE_AZURE_COMMUNICATION_CONNECTION_STRING;

if (!connectionString) {
  throw new Error('Azure Communication connection string is required');
}

const emailClient = new EmailClient(connectionString);

export async function sendEmail(to: string, subject: string, content: string) {
  try {
    const message = {
      senderAddress: "DoNotReply@2b711708-b606-48bd-b88c-0897ef049cc5.azurecomm.net",
      content: {
        subject,
        plainText: content,
        html: content,
      },
      recipients: {
        to: [
          {
            address: to,
          },
        ],
      },
    };

    const poller = await emailClient.beginSend(message);
    const result = await poller.pollUntilDone();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}