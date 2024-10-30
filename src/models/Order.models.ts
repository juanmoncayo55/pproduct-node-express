import { Column, DataType, Model, Table } from "sequelize-typescript";
import Client from "./Client.model";
import Product from "./Product.model";

@Table({
  tableName: "order"
})

class Order extends Model {
  @Column({
    references: {
      model: Client,
      key: "id"
    }
  })
  declare client_id: number

  @Column({
    references: {
      model: Product,
      key: "id"
    }
  })
  declare product_id: number

  @Column({
    type: DataType.INTEGER
  })
  declare cantidad: number
}

export default Order;