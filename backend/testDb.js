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
        console.log('✅ MongoDB Connected Successfully!');
        console.log('📊 Database name : ',mongoose.connection.db.portfolio);

        //List All collection
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('\n📁 Collections in database : ');
        if(collections.length === 0){
            console.log('No Collections found (database is empty)');
        }else{
            collections.forEach(col => {
                console.log(` -${col.name}`);
            });
        }


        //Create  a test Document
        console.log('\n Testing document creation...');
        const TestSchema = new mongoose.Schema({
            message:String,
            timeStamp:{type : Date, default : Date.now}
        });

        const Test = mongoose.model('Test', TestSchema);
        const testDoc = new Test({
            message:'Test connection successful!'
        });
        await testDoc.save();
        console.log('Test document created successfully!');

        //Read the document
        
    }
}