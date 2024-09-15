const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    namaLengkap: {
        type: String,
        require: true
    },
    telepon: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['pelanggan','admin']
    },
});


module.exports = mongoose.model('user', userSchema);