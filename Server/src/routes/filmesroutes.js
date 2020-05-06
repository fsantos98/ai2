const { Router } = require("express")

const router = Router()
const filmescontroller = require("../controllers/filmescontrollers")

router.get('/', filmescontroller.home)
router.get('/id/:id', filmescontroller.getFilme)
router.get('/genero/:genero', filmescontroller.getFilmesComGenero)
router.get('/criar', filmescontroller.criarFilme)

module.exports = router