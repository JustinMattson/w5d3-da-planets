import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetService {
  async find(query = {}) {
    let data = await dbContext.Planet.find(query);
    return data;
  }
  async findById(id) {
    let data = await dbContext.Planet.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.Planet.create(rawData);
  }
  async edit(update) {
    let data = await dbContext.Planet.findByIdAndUpdate(update.id, update, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Planet.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const planetService = new PlanetService();
