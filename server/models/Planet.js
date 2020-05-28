import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const Planet = new Schema(
  {
    name: { type: String, required: true },
    moons: { type: Number, required: false },
    solarSystem: { type: ObjectId, ref: "SolarSystem", required: true },
    galaxy: { type: ObjectId, ref: "Galaxy", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
