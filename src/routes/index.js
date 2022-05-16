const { Router } = require("express");
const router = Router();

// importation
const {
    getComicToday,
    getComicSpecific
} = require("../controllers/comic.controller");



// Routes
router.get("/ComicToday", getComicToday)
router.get('/ComicSpecific', getComicSpecific)



module.exports = router;
