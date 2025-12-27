const mongoose = require('mongoose');

const connectDB=async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });

        console.log('MongoDB Connected Successfully');
        console.log(`Database : ${mongoose.connection.db.portfolio}  `);    
    }catch(error){
        console.error('MongoDB Connection Error : ',error.message);
        process.exit(1);
    }
};

module.exports = connectDB;