import { Request, Response } from "express";
import Client from "../models/Client.model";

export const addClient = async (req: Request, res: Response) => {
  try{
    const client = await Client.create(req.body);
    res.status(201).json({data: client});
  } catch(error) {
    console.log(error);
  }
}

export const getAllClients = async (req: Request, res: Response) => {
  try{
    const clients = await Client.findAll({
      order: [
        ["id", "DESC"]
      ]
    });
    res.json({data: clients});
  } catch(error) {
    console.log(error);
  }
}

export const getOneClient = async (req: Request, res: Response) => {
  try{
    const {id} = req.params;
    const client = await Client.findByPk(id);

    if(!client){
      res.status(400).json({message: "NO hay resultados"});
    }

    res.json({data: client})
  } catch(error) {
    
  }
}

export const updateClient = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const clientFilter = await Client.findByPk(id);

    if(!clientFilter){
      res.status(400).json({error: "No hay registro que mostrar"});
    }

    await clientFilter.update(req.body);
    await clientFilter.save();

    res.json({data: clientFilter});
  } catch(error) {
    console.log(error);
  }
}

export const deleteClient = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const clientFilter = await Client.findByPk(id);

    if(!clientFilter){
      res.status(400).json({error: "No hay registro que mostrar"});
    }

    await clientFilter.destroy();
    res.json({message: "El Cliente se elimino correctamente"});
  } catch(error) {
    console.log(error);
  }
}