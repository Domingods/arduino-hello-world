const express = require('express')

const { Board, Led } = require('johnny-five');

// const { cachedDataVersionTag } = require('v8');
const board = new Board();
const app = express()
const port = 3000

board.on('ready', () => {

    const led = new Led(13); // Conecte o LED ao pino digital 13

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
    app.get('/on', (req, res) => {
        led.on()
        console.log('led on')
        res.send('led on')
    })
    app.get('/off', (req, res) => {
        led.stop();
        led.off()
        console.log('led off')
        res.send('led off')
    })
    app.get('/blink', (req, res) => {
        led.blink(300)
        console.log('led blink')
        res.send('led blink')
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})