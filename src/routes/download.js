const router = require('express').Router()
const mime = require('mime-types')
const processPath = require('../lib/testPath')

router.get('/:path' , (req , res ,next) => {
    try {
        const file = processPath(req.params.path).absolutePath
        const mimetype = mime.lookup(file)
        console.log(mimetype);
        res.setHeader('Content-Disposition', `attachment; filename=${file}`)
        res.setHeader(`Content-Type` , mimetype)
        res.download(file)
    } catch (error) {
        next(error)
    }
})

module.exports = router