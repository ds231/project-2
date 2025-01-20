import axios from 'axios';

const HUBSPOT_API_KEY = '5cce93a0-1e2d-4ae8-9827-1cc5d28da3df';

export async function updateLeadInCRM(leadData: any) {
  try {
    const response = await axios.post(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      leadData,
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating CRM:', error);
    throw error;
  }
}