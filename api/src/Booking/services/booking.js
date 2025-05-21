const { models } = require("../../_shared/config/DatabaseConfig");
const moment = require("moment");

const editBooking = async (id, body) => {
  try {
    if (!id) {
      throw new Error("Booking ID is required");
    }

    const updateBooking = await models.booking_file.update(body, {
      where: { id: id },
    });
    if (updateBooking === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteBooking = async (id) => {
  try {
    if (!id) {
      throw new Error("Booking id is required");
    }

    const deletedRows = await models.booking_file.destroy({
      where: { id: id },
    });

    if (deletedRows === 0) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  editBooking,
  deleteBooking,
};
