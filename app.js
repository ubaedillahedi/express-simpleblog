const express = require('express')
const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')

// untuk url static akan diarahkan kesitu
app.use(express.static('public'))
// setiap ada url dengan kata css,js atau img akan diarahkan sesuai dengan foldernya
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

require('./src/routes/home.routes')(app)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`starting development server: http://localhost:${PORT}`);
})