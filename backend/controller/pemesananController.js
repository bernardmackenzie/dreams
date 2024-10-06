module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Onawan | Pemesanan';
            
            res.render('pages/pemesanan');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}