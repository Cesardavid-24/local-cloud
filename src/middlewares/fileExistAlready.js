const { manageErr } = require('./base')

const eexist = (error , req, res,next) => {
    manageErr(error , {
        code: 'EEXIST',
        message: 'Directory already exists',
        statusCode: 400,
    })
    next(error)
}
module.exports = eexist