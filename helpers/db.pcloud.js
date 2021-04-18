// This is for Content (Imgs, Videos, Etc.)
const axios = require('axios').default
var qs = require('query-string')
//const pcloud = require('pcloud-sdk-js') // The SDK is broken
require('dotenv').config()

async function getAll(folder=8517787562) { // Defualts to the 'Public Folder'
    try{
        let querys = {
            folderid: folder,
            logout: 1,
            username: process.env.pCloudUsername,
            password: process.env.pCloudPassword
        }
        const response = await axios({
            method: 'post',
            url: new URL(`?${qs.stringify(querys, encode=true)}`, `https://api.pcloud.com/listfolder`).href,
        })
        // return response.data.metadata.contents[0].name
        return { ErroredOut: false , list: response.data.metadata.contents.map(file => file.name) }
    } catch (err) {
        console.log('Error:', err)
        return { ErroredOut: true, Error: err }
    }
}

module.exports.getAll = getAll

module.exports.upload = async (file, folder=8517787562) => { // Defualts to the 'Public Folder'
    try {
        if (file.name in await getAll(folder).list) {
            throw new ReferenceError(`File with name "${file.name}" already exists`)
        } else {
            let querys = {
                folderid: folder,
                filename: file.name,
                logout: 1,
                username: process.env.pCloudUsername,
                password: process.env.pCloudPassword
            }
            const response = await axios({
                method: 'post',
                url: new URL(`?${qs.stringify(querys, encode=true)}`, `https://api.pcloud.com/uploadfile`).href,
                data: file.file
            })
            return { ErroredOut: false , url: new URL(response.data.metadata[0].name, `https://filedn.com/lmJhyeqhx39FCQSarCfSP5X/`).href }
        }
    } catch (err) {
        console.log('Error:', err)
        return { ErroredOut: true, Error: err } 
    }
}


