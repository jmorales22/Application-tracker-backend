const db = require("./conn.js");

class AddCompany {
  constructor(id, company_name) {
    this.id = id, 
    this.company_name = company_name;
  }

  static async getAllCompanies() {
    try {
      const response = await db.any(`select * from companies ORDER BY company_name; 
      `);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addCompany(
    company_name
  ) {
    try {
      const response = await db.one(
        `INSERT INTO companies (company_name) VALUES ($1)`,
        [company_name]
      );
      return response;

    } catch (error) {
      console.error("ERROR: ", error);
      return error;
    }
  }
}

module.exports = AddCompany;
