
import express, { Request, Response } from 'express'

const port: Number = 8080;

const app = express();

app.get('/', (req: Request, res: Response) => {
    let message: String
    res.send('Servidor ok')
})



interface User {
    name: string,
    birthday: Date,
    phone: Number
}


let test: String;
let stringList: Array<String> = ['laranja', 'maçã']; //array de users

const currentDate: Date = new Date;

function returnArray(newArray: Array<Number> = []) {
    let i: number
    let total: number = 9
    for(i = 0; i < total; i++) {
        newArray.push(i)
    }

    console.log(newArray)
}

returnArray([])