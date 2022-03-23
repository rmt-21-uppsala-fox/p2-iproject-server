const express = require('express');
const cors = require('cors');
const routers = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
