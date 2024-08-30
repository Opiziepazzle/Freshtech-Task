const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    network: { type: String, enum: ['MTN', 'Airtel', 'Etisalat'], required: true },
    phoneNumber: { type: String, required: true },
    airtimePin: { type: String, required: true }
});

module.exports = mongoose.model('Info', infoSchema);
