import { Request, Response } from "express"
import Product from "../models/Product.model";

export const addProduct = async (req: Request, res: Response) => {
  try{
    const product = await Product.create(req.body);
    res.status(201).json({data: product});
  } catch(error) {
    console.log(error);
  }
}

export const getAllProducts = async (req: Request, res: Response) => {
  try{
    const products = await Product.findAll({
      order: [
        ["id", "DESC"]
      ]
    });
    res.json({data: products});
  } catch(error) {
    console.log(error);
  }
}

export const getOneProduct = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const productFilter = await Product.findByPk(id);

    if(!productFilter){
      res.status(400).json({error: "No se Encontro resultado"});
    }

    res.json({data: productFilter});
  } catch(error) {
    console.log(error);
  }
}

export const editProduct = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const productFilter = await Product.findByPk(id);

    if(!productFilter){ //existe o no existe
      res.status(400).json({error: "No se Encontro resultado"});
    }

    //actualizando el producto encontrado
    await productFilter.update(req.body); //actualizamos con la informacion que venga en req.body
    await productFilter.save(); //gaurdamos el cambio con save()

    res.json({data: productFilter});
  } catch(error) {
    console.log(error);
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const productFilter = await Product.findByPk(id);

    if(!productFilter){ //existe o no existe
      res.status(400).json({error: "No se Encontro resultado"});
    }

    await productFilter.destroy();
    res.json({message: "Se elimino correctamente"});
  } catch (error) {
    console.log(error);
  }
}