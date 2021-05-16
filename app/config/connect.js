const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.DBCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.info(('Connected to database!'));
    })
    .catch((err) => {
        console.error(err);
    })