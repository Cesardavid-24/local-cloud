const router = require('express').Router()
const fileUpload = require('express-fileupload')
const content = require('./content')
const upload = require('./upload')
const download = require('./download')
const dir = require('./dir')

router.use(fileUpload())
router.use(content)
router.use(upload)
router.use(download)
router.use(dir)

module.exports = router 