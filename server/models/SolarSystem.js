import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const SolarSystem = new Schema(
  {
    name: { type: String, required: true },
    planets: { type: Array, required: false },
    dwarfs: { type: Array, required: false },
    galaxy: { type: ObjectId, ref: "Galaxy", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default SolarSystem;
