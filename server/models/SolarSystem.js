import mongoose, { isValidObjectId } from "mongoose";
const Schema = mongoose.Schema;

const SolarSystem = new Schema(
  {
    name: { type: String, required: true },
    planets: { type: String, required: true },
    dwarfs: { type: String, required: true },
    galaxy: { type: ObjectId, ref: "Galazy", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default SolarSystem;
