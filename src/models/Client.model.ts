import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "client"
})

class Client extends Model {
  @Column({
    type: DataType.STRING(60)
  })
  declare nombre: string

  @Column({
    type: DataType.STRING(60)
  })
  declare apellido: string

  @Column({
    type: DataType.STRING(40)
  })
  declare direccion: string

  @Column({
    type: DataType.STRING(10)
  })
  declare telefono: string

  @Column({
    type: DataType.STRING(35)
  })
  declare email: string

}

export default Client;