import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SolarSystemService {
  async find(query = {}) {
    let data = await dbContext.SolarSystem.find(query);
    return data;
  }
  async findById(id) {
    let data = await dbContext.SolarSystem.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.SolarSystem.create(rawData);
  }
  async edit(update) {
    let data = await dbContext.SolarSystem.findByIdAndUpdate(
      update.id,
      update,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.SolarSystem.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const solarSystemService = new SolarSystemService();
