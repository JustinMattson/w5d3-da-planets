import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
//import { solarSystemService ) from "../services/SolarSystemService"import { get } from "mongoose";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxy");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      // .get("/:id/solarSystem", this.getSolarSystemByGalaxyId)
      // .get("/:id/planets", this.getPlanetsByGalaxyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await galaxyService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxyService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  // async getSolarSystemByGalaxyId(req, res, next) {
  //   try {
  //     let data = await solarSystemService.find({ galaxy: req.params.id });
  //     return res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  // async getPlanetsByGalaxyId(req, res, next) {
  //   try {
  //     let data = await planetService.find({ galaxy: req.params.id });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  async create(req, res, next) {
    try {
      let data = await galaxyService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id;
      let data = await galaxyService.edit(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await galaxyService.delete(req.params.id);
      return res.send("Deleted");
    } catch (error) {
      next(error);
    }
  }
}
