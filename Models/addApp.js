const db = require("./conn");

class AddApp {
  constructor(
    user_id,
    city,
    position,
    position_description,
    application_date,
    offer_extended,
    make_public
  ) {
    this.user_id = user_id;
    this.company_id = company_id;
    this.city = city;
    this.position = position;
    this.position_description = position_description;
    this.application_date = application_date;
    this.offer_extended = offer_extended;
    this.make_public = make_public;
  }
  static async addApplicationData(
    user_id,
    company_id,
    city,
    position,
    position_description,
    application_date,
    offer_extended,
    make_public
  ) {
    try {
      const postAppData = await db.result(
        `insert into applications
        (company_id, city, position, position_description, application_date, offer_extended, make_public)
        values
        ($1, $2, $3, $4, $5, $6, $7)`,
        [
          company_id,
          city,
          position,
          position_description,
          application_date,
          offer_extended,
          make_public,
        ]
      );
      return postAppData;
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
}

module.exports = AddApp;
