import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

const app: express.Application = express()
const host: string = process.env.HOST as string
const port: string = process.env.PORT as string
const address: string = host + ":" + port

app.use(bodyParser.json())

dotenv.config();

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

function logAddress() {
    console.log(`starting app on: ${address}`)
}


app.listen(port, logAddress)
