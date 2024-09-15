var express = require('express');
const dashboardController = require('../controller/dashboardController');
const produkController = require('../controller/produkController');
const pemesananController = require('../controller/pemesananController');
const pembayaranController = require('../controller/pembayaranController');
const userController = require('../controller/userController');
const keranjangController = require('../controller/keranjangController');
const bankController = require('../controller/bankController');
const{ upload } = require('../middlewares/multer'); 

var router = express.Router();

/* GET home page. */
router.get('/dashboard',dashboardController.index);
router.get('/produk',produkController.index);
router.post('/tambah-produk',upload.single('gambar'),produkController.store);
router.put('/ubah-produk',upload.single('gambar'),produkController.update);
router.delete('/delete-produk/:id',produkController.delete);

router.get('/pemesanan',pemesananController.index);
router.get('/pembayaran',pembayaranController.index);
router.get('/user',userController.index);
router.get('/keranjang',keranjangController.index);
router.get('/bank',bankController.index);

module.exports = router;