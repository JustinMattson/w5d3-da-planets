import ValueSchema from "../models/Value";
import GalaxySchema from "../models/Galaxy";
import SolarSystemSchema from "../models/SolarSystem";
import PlanetSchema from "../models/Planet";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema);
  Planet = mongoose.model("Planet", PlanetSchema);
}

export const dbContext = new DbContext();
