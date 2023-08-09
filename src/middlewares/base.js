const manageErr = (error , settings) => {
    if(error.code !== settings.code) {
        return false
    }

    error.message = settings.message
    error.statusCode = settings.statusCode

    return true
}

module.exports = { manageErr }