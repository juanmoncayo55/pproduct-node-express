import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "product"
})

class Product extends Model {
  @Column({
    type: DataType.STRING(40)
  })
  declare nombre_producto: string

  @Column({
    type: DataType.TEXT
  })
  declare descripcion: string

  @Column({
    type: DataType.FLOAT
  })
  declare precio: number

  @Column({
    type: DataType.INTEGER
  })
  declare stock: number
}

export default Product;