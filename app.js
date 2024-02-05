const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.listen(process.env.PORT || 3003, ()=>{
    console.log('Servidor corriendo');
})