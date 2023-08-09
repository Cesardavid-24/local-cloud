require('dotenv').config()

const storage = process.env.HOME_CLOUD_STORAGE

if(!storage){
    console.error('storage path not defined, ', 
    'set a value for HOME_CLOUD_STORAGE enviroment variable')

    process.exit(1)
}

module.exports = storage