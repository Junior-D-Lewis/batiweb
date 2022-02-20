const express = require ('express');
const bcryp = require ('bcrypt');

function login(){
    const router = express.Router();

    router.post("/", async (req, res) => {
        console.log('En attende de BD');

        res.status(401).send('Erreur on a pas de BD');
    })

    return router;
}

module.exports = login;