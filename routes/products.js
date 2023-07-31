/**
 author : Menaka Lakshan
 created : 27/07/2023
 */

const router = require("express").Router();
const Product = require("../models/Product")

router.post("/", async (req, res) => {

    try {
        const product = req.body;
        let savedUser = await new Product(product).save();
        console.log(savedUser);
        res.status(200).send(savedUser)
    } catch (error) {
        console.log(error);
    }

})

router.get("/", async (req, res) => {
    console.log("received")
    try {
        const userList = await Product.find();
        console.log(userList)
        res.status(200).send(userList);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;