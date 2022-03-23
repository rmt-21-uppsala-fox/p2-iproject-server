const { HLTV } = require('hltv')
const express = require('express')
const app = express()
const axios = require('axios')


app.use(express.json())
app.get('/ranks', async (req, res) => {
    try {
        let data = await HLTV.getTeamRanking()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})