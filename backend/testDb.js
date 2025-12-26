//testDb.js - Test MongoDb Connection
const mongoose=require("mongoose");
require ('dotenv').config();

const testConnnection= async () => {
    try{
        console.log(' 🔄 sAttempting to Connecting to MongoDB....');
        console.log('Connection String : ',process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');

        await mongodb.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB Connected Successfully!');
        console.log('Database name : ',mongoose.connection.db.portfolio);

        //List All collection
        
    }
}