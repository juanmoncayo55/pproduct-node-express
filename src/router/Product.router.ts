import { Router } from "express";
import { body, param } from "express-validator";
import { addProduct, deleteProduct, editProduct, getAllProducts, getOneProduct } from "../handlers/product";
import { handleInputErrors } from "../middleware";

const ProductRouter = Router();

//Crear Producto
ProductRouter.post('/',
  body("nombre_producto")
    .notEmpty().withMessage("El nombre del producto no puede ir vacio"),
  body("descripcion")
    .notEmpty().withMessage("La descripcion es obligatoria"),
  body("precio")
    .notEmpty().withMessage("El precio es Obligatorio")
    .isNumeric().withMessage("El valor debe ser numerico")
    .custom(valor => valor > 0).withMessage("El precio debe ser mayor a 0"),
  body("stock")
    .notEmpty().withMessage("El stock del producto es obligatorio")
    .isNumeric().withMessage("El dato ingresado no es valido"),
  handleInputErrors,
  addProduct
);

//Obtener todos los productos
ProductRouter.get('/', getAllProducts);

//Obtener un producto en especifico
ProductRouter.get('/:id',
  param("id").isInt().withMessage("ID No valido"),
  handleInputErrors,
  getOneProduct
);

//Editar un producto
ProductRouter.put('/:id',
  param("id").isInt().withMessage("ID No valido"),
  body("nombre_producto")
    .notEmpty().withMessage("El nombre del producto no puede ir vacio"),
  body("descripcion")
    .notEmpty().withMessage("La descripcion es obligatoria"),
  body("precio")
    .notEmpty().withMessage("El precio es Obligatorio")
    .isNumeric().withMessage("El valor debe ser numerico")
    .custom(valor => valor > 0).withMessage("El precio debe ser mayor a 0"),
  body("stock")
    .notEmpty().withMessage("El stock del producto es obligatorio")
    .isNumeric().withMessage("El dato ingresado no es valido"),
  handleInputErrors,
  editProduct
);

//Eliminar un producto
ProductRouter.delete('/:id',
  param("id").isInt().withMessage("ID No valido"),
  handleInputErrors,
  deleteProduct
)

export default ProductRouter;