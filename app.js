if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})