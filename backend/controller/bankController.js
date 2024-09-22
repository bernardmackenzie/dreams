const Bank = require ('../models/bank');

const fs = require ('fs');
const path = require ('path');
module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | Bank';
            const cake = await Bank.find();
            console.log(cake);
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {
                message: alertMsg,
                status: alertStatus
            }
            res.render('pages/bank', {alert,cake});
        } catch(error) {
            console.log(error.message);
          
        }
    },

    store: async (req, res) => {
        try {
            const { nama, nomorAkun,pemilikAkun } = req.body;
            console.log(req.body);
            await Bank.create({ nama,gambar: req.file.filename, nomorAkun, pemilikAkun});
            
            req.flash('alertMsg', 'New document has been saved');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/bank');
        } catch (error) {
            // console.error(error);
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');  
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data_kue = await Bank.findOneAndDelete({_id:id});
            if(data_kue && data_kue.gambar){
                const path_gambar = path.join(__dirname, '../public/images', data_kue.gambar);
                if (fs.existsSync(path_gambar)) {
                    fs.unlinkSync(path_gambar);
                }
            }
            req.flash('alertMsg', 'Warning, document has been deleted.');
            req.flash('alertStatus', 'warning');
            res.redirect('/admin/bank');
        } catch(error) {
             // console.log(error.message);
                req.flash('alertMsg', error.message );
                req.flash('alertStatus', 'danger');
                res.redirect('/admin/bank');
        }
    },
    update: async (req, res) => {
        try {
            const { id, namaBank, nomorAkunBank, pemilikAkunBank,} = req.body;
            if (req.file !== undefined) {
                const gambarBaru = req.file.filename;
                const data_kue = await Bank.findOne({_id:id});
                if (data_kue.gambar) {
                    const logoPath = `public/images/${data_kue.gambar }`;
                    fs.unlinkSync(logoPath); 
                }
                await Bank.updateOne({_id:id}, {
                    namaBank: namaBank,
                    nomorAkunBank: nomorAkunBank,
                    pemilikAkunBank: pemilikAkunBank,
                    gambar: gambarBaru,
                });
            } else {
                await Bank.updateOne({_id:id}, {
                    namaBank: namaBank,
                    nomorAkunBank: nomorAkunBank,
                    pemilikAkunBank: pemilikAkunBank,
                });
            }
            req.flash('alertMsg', 'Success, document has been updated');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/bank');
        } catch(error) {
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
    }
}