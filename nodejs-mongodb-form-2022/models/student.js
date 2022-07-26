import mongoose from 'mongoose'

// definging schema

const studentSchema = new mongoose.Schema({
        name:{type:String, required:true,trim:true},
        age:{type:Number, required:true},
        fees:{type:mongoose.Decimal128,required:true}
})

// Model 
const studentModel = mongoose.model("collectionName",studentSchema);


export default studentModel;
