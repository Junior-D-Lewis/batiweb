const express = require ('express');
const bcryp = require ('bcrypt');
const res = require('express/lib/response');

function login(){
    const router = express.Router();

     router.post("/", async (req, res) => {
       // console.log('En attende de BD');

       // res.status(401).send('Erreur on a pas de BD');

        res.status(200).send('response login courtier')
        console.log('fgghfghdfh')
    }) 

   

    return router;
}

module.exports = login;