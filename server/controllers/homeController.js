const { response, request } = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

exports.getCookie = async (request, response) => {
}
