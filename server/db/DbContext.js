import ValueSchema from "../models/Value";
import GalaxySchema from "../models/Galaxy";
//import SolarSystemSchema from "../models/SolarSystem";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  //SolarSystems = mongoose.model("Sun", SolarSystemSchema);
}

export const dbContext = new DbContext();
