import express, { Request, Response } from 'express'

const app = express()


app.get('/status', (req: Request, res: Response) => {
    res.status(200).send({hello: 'world'})
})


app.listen(8080, () => {
    console.log('Server is running')
})