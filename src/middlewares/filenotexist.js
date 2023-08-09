const { manageErr } = require('./base')

const enoent = (error,req,res,next) => {
manageErr(error, {
    code: 'ENOENT',
    message: 'file or directory does not exist',
    statusCode: 400,
})
next(error);
}
module.exports = enoent