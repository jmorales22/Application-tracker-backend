const db = require("./conn.js");

class CompanyModel {
  constructor(id, company_name) {
    this.id = id;
    this.company_name = company_name;
  }
  static async addCompany() {
    try {
      const response = await db.any(
        `INSERT INTO companies
      (company_name)
      ($1)`,
        [this.company_name]
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
}

module.exports = CompanyModel;
