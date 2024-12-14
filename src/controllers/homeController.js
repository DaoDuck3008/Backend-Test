
const getHomePage = (req,res) => {
    res.send("You are at home page!!!");
}

const getABC = (req,res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage,
    getABC
};