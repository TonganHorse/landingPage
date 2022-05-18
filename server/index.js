const express = require('express')
const path = require('path')
const app = express()



app.use("/", express.static(path.join(__dirname, "../public")));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// })

// app.get("/styles", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.css"))
// })

// app.get("/js", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/main.js"))
// })

port = process.env.PORT || 4005 

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})