const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
    namaProduk: {
        type: String,
        require: true
    },
    kategori: {
        type: String,
        require: true
    },
    harga: {
        type: Number,
        require: true
    },
    gambar: {
        type: String,
        require: true
    },
    desckripsi: {
        type: String,
        require: true
    },
    isRecomendasi: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('produk', produkSchema);