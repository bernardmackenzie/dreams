const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const keranjangSchema = new mongoose.Schema({
    
    produkId: {
        type: String,
        require: true
    },
    totalBayar: {
        type: String,
        require: true
    },
    jumlah: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('keranjang', keranjangSchema);