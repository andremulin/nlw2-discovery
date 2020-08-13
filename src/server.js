const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageGiveClasses, pageLanding, pageStudy, saveClasses } = require('./pages')

nunjucks.configure('src/views/',{
    express: server,
    noCache: true
})

server
//req.body
.use(express.urlencoded( {extended: true} ))
//req.quey
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
