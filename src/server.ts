import express from "express";
import db from "./config/db";
import ProductRouter from "./router/Product.router";
import ClientRouter from "./router/Client.router";

async function ConnectDB() {
  try{
    await db.authenticate();
    db.sync();
  } catch(error) {
    console.log(error);
  }
}

ConnectDB();

const server = express();

//Habilitando json para recibir request en formato json
server.use( express.json() );

//Rutas
server.use( '/api/products', ProductRouter )
server.use( '/api/clients', ClientRouter )

export default server;