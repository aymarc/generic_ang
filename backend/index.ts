import express from  "express";
import DB from "./utils/db";

const db = new DB();
const app = express();


(async()=>{
    await db.initializer.sync();
    app.listen(process.env.PORT || 8500, ()=>{
        console.info(`Server listening on port ${process.env.PORT || 8500} \n`);
    })
})();