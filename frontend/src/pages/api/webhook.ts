import { NextApiRequest, NextApiResponse } from "next";

// Handles incoming POST requests from Github
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const payload = req.body;

    console.log('Received payload:', payload);

    // Check if the event is a push event to the main branch
    if (payload.ref && payload.ref === 'refs/heads/main') {
      console.log('Push event to main branch detected');
      // Add your logic to handle the push event, such as triggering a CI/CD pipeline
    }

    // Send ack to Github
    res.status(200).json({ message: 'Webhook received' });

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
