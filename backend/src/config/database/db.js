const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

// console.log(process.env.COLLECTION_NAME);
const DB = `mongodb+srv://${process.env.COLLECTION_NAME}:${process.env.COLLECTION_PASSWORD}@cluster0.nrapwss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(DB, {
    useNewUrlParser: true,

}).then(() => {
    console.log("connection successful!...");
}).catch((err) => {
    console.log(`connection failed!.... ${err}`);
});
