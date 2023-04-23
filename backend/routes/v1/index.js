const express = require("express");
const {
    UserController,
    ScoreController
} = require("../../Controller/index");

const router = express.Router();

router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.post("/score", ScoreController.update);
router.get('/dash', ScoreController.getData);
module.exports = router;