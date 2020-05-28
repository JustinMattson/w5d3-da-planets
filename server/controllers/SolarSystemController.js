import express from "express";
import BaseController from "../utils/BaseController";
import { solarSystemService } from "../services/SolarSystemService";
import { planetService } from "../services/PlanetService";

export class SolarSystemController extends BaseController {
  constructor() {
    super("api/solarSystem");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/planets", this.getPlanetsBySolarSystemId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let data = await solarSystemService.find(req.query);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await solarSystemService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getSolarSystemBySolarSystemId(req, res, next) {
    try {
      let data = await solarSystemService.find({ solarSystem: req.params.id });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getPlanetsBySolarSystemId(req, res, next) {
    try {
      let data = await planetService.find({ solarSystem: req.params.id });
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await solarSystemService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id;
      let data = await solarSystemService.edit(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await solarSystemService.delete(req.params.id);
      return res.send("Deleted");
    } catch (error) {
      next(error);
    }
  }
}
