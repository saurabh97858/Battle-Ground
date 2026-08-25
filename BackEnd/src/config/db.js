import mongoose from 'mongoose'

async function main() {
   await mongoose.connect(process.env.DB_CONNECT_KEY, {
       maxPoolSize: 10,
       minPoolSize: 2,
       serverSelectionTimeoutMS: 10000,
       socketTimeoutMS: 45000
   })
}

export default main;