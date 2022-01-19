//First we create a variable to import express from node modules folder into our file using require() method. Then we make express a dependency.
require("dotenv").config()
// .env imprt must be above all other imports
const Express = require("express");
const app = Express()

app.listen(process.env.PORT, () => {
    console.log('[server]: app.js is listening on 4000')  
    //console.log(process.env) // shows all loaded variables that exist in process.env
})

