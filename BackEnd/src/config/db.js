import mongoose from 'mongoose'

mongoose.set('bufferCommands', false);

async function main() {
   await mongoose.connect(process.env.DB_CONNECT_KEY, {
       maxPoolSize: 10,
       minPoolSize: 2,
       serverSelectionTimeoutMS: 3000,
       socketTimeoutMS: 15000
   })
}

export default main;