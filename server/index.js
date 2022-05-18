const express = require('express')
const path = require('path')
const app = express()


app.get(path.join(__dirname, "../client/index.html"))











port = process.env.PORT || 4005 

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})