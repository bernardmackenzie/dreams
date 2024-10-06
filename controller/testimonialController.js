const Testimonial = require('../models/testimonial.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    index: async (req, res) => {
        try {
            const testimonial = await Testimonial.find();
            const userSession = req.session.user;
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {
                message: alertMsg,
                status: alertStatus
            }
            res.locals.title = 'Dreams | Testimonial';
            res.locals.onPage = 'testimonial';
            res.render('pages/testimonial', {testimonial, alert,userSession});
        } catch(error) {
            req.flash('alertMsg', error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/dashboard');
        }
    },
    store: async (req, res) => {
        try {
            const { 
                fullname, 
                status, 
                content, 
            } = req.body;

            // console.log(req.file);
            await Testimonial.create({
                image: req.file.filename,
                fullname,
                status,
                content,
            });

            req.flash('alertMsg', 'New document has been saved');
            req.flash('alertStatus', 'success');
            res.json({ alertMsg: 'New document has been saved.', alertStatus: 'success' });
            // res.redirect('/admin/testimonial');
            
            // console.log(req.body);
        } catch(error){
            // console.log(error.message);
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.json({ alertMsg: 'Failed, error code: ' + error.message, alertStatus: 'danger' });
            // res.redirect('/admin/testimonial');
        }
    },
    update: async (req, res) => {
        try {
            const {id, fullname, status , content } = req.body;
            // console.log(req.body);   
            // console.log(req.file);

            if(req.file !== undefined ) {
                await Testimonial.updateOne({_id:id}, {
                    image: req.file.filefullname,
                    fullname: fullname,
                    status: status,
                    content: content,
                })
            } else {
                await Testimonial.updateOne({_id:id}, {
                    fullname: fullname,
                    status: status,
                    content: content,
                })
            }
            console.log(req.file);
            req.flash('alertMsg', 'Success, document has been updated');
            req.flash('alertStatus', 'success');
            res.json({ alertMsg: 'Success, new document has been saved.', alertStatus: 'success' });
            // res.redirect('/admin/testimonial');

        } catch(error){
            console.log(error.message);
            req.flash('alertMsg','Failed, error code: ' + error.message );
            req.flash('alertStatus', 'danger');
            res.json({ alertMsg: 'Failed, error code: ' + error.message, alertStatus: 'danger' });
            // res.redirect('/admin/testimonial');
        }
    },
    delete: async (req, res) => {
        try{
            const { id } = req.params;
            const testimonial = await Testimonial.findOneAndDelete({_id:id});
            if (testimonial && testimonial.image) {
                const imagePath = path.join(__dirname, '../public/images', testimonial.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }
            req.flash('alertMsg', 'Warning, document has been deleted.');
            req.flash('alertStatus', 'warning');
            res.redirect('/admin/testimonial');
        } catch(error) {
            // console.log(error.message);
            req.flash('alertMsg', error.message );
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/testimonial');
        }
    }
}