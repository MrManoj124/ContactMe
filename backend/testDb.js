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
        console.log('\n 🧪 Testing document creation...');
        const TestSchema = new mongoose.Schema({
            message:String,
            timeStamp:{type : Date, default : Date.now}
        });

        const Test = mongoose.model('Test', TestSchema);
        const testDoc = new Test({
            message:'Test connection successful!'
        });
        await testDoc.save();
        console.log(' ✅ Test document created successfully!');

        //Read the document
        const docs = await Test.find();
        console.log(' 📖 Test documents found : ', docs.length);

        //Clean up test Collection
        await mongoose.connection.db.dropCollection('tests');
        console.log('🧹 Test Collectoin cleaned Up');

        console.log('\n 🎉 All database operations successful!');
        console.log(' ✨ Your MoongoDB connection is working perfectly!');
    }catch(error){
        console.log('\n ❌ MongoDB connction Error : ');
        console.log('Error Message : ', error.message);
        
        if(error.message.includes('ECONNREFUSED')){
            console.log('\n 💡 Troubleshooting tips : ');
            console.log('  1.Make sure MongoDB is installed and running');
            console.log('  2.Check if MongoDB service is started : ');
            console.log('    - macOS/Linux : brew services is start mongodb-community');
            console.log('    - Windows : net start MongoDB');
            console.log('  3.Verify connection string in .env file');
    }else if(error.message.includes('authentication failed')){
        console.log('\n 💡 Authentication issue : ');
        console.log('  1.Check your MongoDB username and password');
        console.log('  2.Verify the database name in connection string');
        console.log('  3.Make sure the user has proper permissions');
    }
}finally{
        await mongoose.connection.close();
        console.log('\n🔒 Connection closed');
        process.exit();
    }
};


// Run the test
testConnection();
