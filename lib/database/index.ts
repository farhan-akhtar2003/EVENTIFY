// CODE TO CONNECT PROJECT WITH OUR DATABASES
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn; // CATCH THE CONNECTION IF 1ST TIME...

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, { // IF CONNECTION IS FIRST TIME OR ALREADY PRESENT...NECESSARY BCZ EVERY TIME SERVER SURF IT HOST A NEW MONGODB CONNECTION SO... FOR EFFICENT SERVER WE DONT NEED TO CONNECT AGAIN AND AGAIN...
    dbName: 'evently',
    bufferCommands: false,// DISABLE BUFFERING 
  })

  cached.conn = await cached.promise;

  return cached.conn; 
}