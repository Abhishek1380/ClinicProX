const mongoose = require('mongoose');

const url = "mongodb+srv://Clinic_Website:2laSM6luo4rWF3Yq@atlascluster.0jb1kvd.mongodb.net/ClinicProX?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(url);

        console.log("Connected to MongoDB using Mongoose");
    } catch (error) {
        console.error("Mongoose connection error:", error.message);
        process.exit(1);
    }
};

async function getData(model, query = {}) {
    try {
        return await model.find(query).lean();
    } catch (err) {
        console.error("Error in getData:", err);
        return [{ "error": "Error fetching data" }];
    }
}

async function postData(model, data) {
    try {
        await model.create(data);
        return { "response": "Data added successfully" };
    } catch (err) {
        console.error("Error in postData:", err);
        return { "response": "Error in sending data" };
    }
}

module.exports = {
    connectDB,
    getData,
    postData
};
