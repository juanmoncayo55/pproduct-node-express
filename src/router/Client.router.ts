import { Router } from "express";
import { body, param } from "express-validator";
import { addClient, deleteClient, getAllClients, getOneClient, updateClient } from "../handlers/client";
import { handleInputErrors } from "../middleware";

const ClientRouter = Router();

//Crear Cliente
ClientRouter.post("/",
  body("nombre")
    .notEmpty().withMessage("El nombre del usuario es Obligatorio"),
  body("apellido")
    .notEmpty().withMessage("El apellido del usuario es Obligatorio"),
  body("direccion")
    .notEmpty().withMessage("La direccion del usuario es Obligatoria"),
  body("telefono")
    .notEmpty().withMessage("El telefono del usuario es Obligatorio")
    .custom(value => value.length < 10 || value.length > 10).withMessage("La longitud del telefono debe contener 10 números (COL)"),
  body("email")
    .notEmpty().withMessage("El email es Obligatorio")
    .isEmail().withMessage("El email es incorrecto"),
  handleInputErrors,
  addClient
);

//Obtener todos los clientes
ClientRouter.get("/", getAllClients);

//Obtener un solo cliente por id
ClientRouter.get("/:id",
  param("id").isInt().withMessage("El ID no es valido"),
  handleInputErrors,
  getOneClient
);

//Actualizar un cliente
ClientRouter.put("/:id",
  param("id")
    .isInt().withMessage("ID no valido"),
  body("nombre")
    .notEmpty().withMessage("El nombre del usuario es Obligatorio"),
  body("apellido")
    .notEmpty().withMessage("El apellido del usuario es Obligatorio"),
  body("direccion")
    .notEmpty().withMessage("La direccion del usuario es Obligatoria"),
  body("telefono")
    .notEmpty().withMessage("El telefono del usuario es Obligatorio")
    .custom(value => value.length < 10 || value.length > 10).withMessage("La longitud del telefono debe contener 10 números (COL)"),
  body("email")
    .notEmpty().withMessage("El email es Obligatorio")
    .isEmail().withMessage("El email es incorrecto"),
  handleInputErrors,
  updateClient
);

ClientRouter.delete("/:id",
  param("id").isInt().withMessage("El ID no es valido"),
  handleInputErrors,
  deleteClient
);

export default ClientRouter;