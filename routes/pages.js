const express = require("express")
const loggedin = require("../controllers/loggedin")
const router = express.Router()
const database = require('../routes/db-config')


router.get("/", loggedin,(req, res)=>{
    if(req.user){
    res.render("index", { status : "loggedin", user: req.user})
}else{
    res.render("index",{ status : "no", user: "nothing"});
}
})

router.get("/register",(req, res)=>{
res.sendFile("login.html",{root: "./public/pages"});
})
    
router.get("/login",(req, res)=>{
res.sendFile("login.html",{root: "./public/pages"});
})

router.get("/home",(req, res)=>{
    res.render("index",);
    })
    

module.exports = router;