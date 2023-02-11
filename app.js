const express = require('express')
const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')

require('./src/routes/home.routes')(app)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`starting development server: http://localhost:${PORT}`);
})