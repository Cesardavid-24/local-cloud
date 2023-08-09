const router = require('express').Router()
const fileUpload = require('express-fileupload')
const processPath = require('../lib/testPath')
const moveFile = require('../lib/move.js')

router.use(fileUpload())

router.post('/:path?' , async (req, res , next) => {
    if(!req.files){
        return res.status(400).json({
            success: false,
            message: `no files were uploaded`
        })
    }

    const dirPath = processPath(req.params.path)
    let files = req.files.file

    if(!Array.isArray(files)){
        files = [files]
    }

    try {
        for (const file of files) {
            await moveFile(file , dirPath.absolutePath)
        }
    } catch(error){
        if(error.code) {
            return next(error)
        }

        return res.status(400).json({
            success: false,
            message: error.message,
            path: dirPath.relativePath
        })
    }

    res.json({
        succes: true,
        message: `Files succesfully uploaded`,
        path: dirPath.relativePath
    })

})

module.exports = router