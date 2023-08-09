const error = (error,req,res, next) => {
    console.log(error)
    res.status(error.statusCode || 500).json({
        message: error.message,
        success: false
    })
}
module.exports = error