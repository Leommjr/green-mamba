import mongoose from 'mongoose';

const ApiSchema = mongoose.Schema({
    name: String,
    description: String,
    url: String,
    rules: Map 
});

export default mongoose.model('Api', ApiSchema);