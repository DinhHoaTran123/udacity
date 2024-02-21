import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

const app: express.Application = express()
const host : string = process.env.HOST as string
const address: string = process.env.HOST as string + ":" + process.env.PORT as string

app.use(bodyParser.json())

dotenv.config();

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(process.env.PORT, function () {
    console.log(`starting app on: ${address}`)
})
