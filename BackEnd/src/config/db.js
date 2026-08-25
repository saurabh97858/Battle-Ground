import mongoose from 'mongoose'

async function main() {
   await mongoose.connect(process.env.DB_CONNECT_KEY, {
       maxPoolSize: 10,
       minPoolSize: 2,
       serverSelectionTimeoutMS: 2500,
       socketTimeoutMS: 15000
   })
}

export default main;