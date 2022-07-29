const db = require("../db")

class userController{
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO person(name, surname) values($1, $2) RETURNING *', [name, surname])
        console.log(name, surname)
        res.json(newPerson.rows[0])
    }
    async getAllUsers(req, res){
        const users = await db.query("SELECT * FROM person")
        res.json(users.rows)
    }
    async getOneUser(req, res){

    }
    async updateUser(req, res){

    }
    async deleteOne(req, res){

    }
}

module.exports = new userController()