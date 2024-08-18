module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Onawan | Dashboard';
            
            res.render('pages/dashboard');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}