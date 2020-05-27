import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
  async find(query = {}) {
    let data = await dbContext.Galaxy.find(query);
    return data;
  }
  async findById(id) {
    let data = await dbContext.Galaxy.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.Galaxy.create(rawData);
  }
  async edit(update) {
    let data = await dbContext.Galaxy.findByIdAndUpdate(update.id, update, {
      new: true,
      //runValidators: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async delete(id) {
    let data = await dbContext.Galaxy.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const galaxyService = new GalaxyService();
