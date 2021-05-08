const express = require("express");
const router = express.Router();

router.get("/api/hello", (req, res) => {
    res.send({ express: "Connexion a l'API OK!" });
});

router.post("/api/world", (req, res) => {
    console.log(req.body);
    res.send(`J'ai bien reçu ta requête, tu m'as envoyé: ${req.body.post}`);
});

module.exports = router;