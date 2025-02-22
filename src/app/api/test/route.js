// src/app/api/test/route.js
import clientPromise from '@/lib/mongodb';
// If your lib folder is not aliased to '@', adjust the path accordingly:
// e.g., import clientPromise from '../../../lib/mongodb';

export async function GET(request) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    // Specify the database; if you want to use a specific database, pass its name here.
    const db = client.db(); // or client.db('mydb') if needed

    // Example: Fetch data from a collection named "testCollection"
    const data = await db.collection('testCollection').find({}).toArray();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
