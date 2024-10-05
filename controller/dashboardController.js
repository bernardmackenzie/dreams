module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Dreams | Dashboard';
            
            res.render('pages/dashboard');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}