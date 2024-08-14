import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "d92jqg9v",  // Replace with your actual project ID
  dataset: "production",
  apiVersion: '2023-01-01', // Use the latest ISO date string or leave it to default
  useCdn: true, // `false` if you want to ensure fresh data
});
