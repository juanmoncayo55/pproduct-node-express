import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Client from "../models/Client.model";
import Product from "../models/Product.model";
import Order from "../models/Order.models";
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
  models: [__dirname + "../models/**/*.ts"],
  logging: false
});

db.addModels( [Client, Product, Order] );

export default db;