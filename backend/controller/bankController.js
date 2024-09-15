module.exports = {
    index: async (req, res) => {
        try {
            res.locals.title = 'Onawan | bank';
            
            res.render('pages/bank');
        } catch(error) {
            console.log(error.message);
          
        }
    }
}