module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Onawan | User';
            
            res.render('pages/user');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}