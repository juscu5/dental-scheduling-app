const { models } = require("../../_shared/config/DatabaseConfig");
const { authMiddleware } = require("../../_shared/middleware");
const { editBooking, deleteBooking } = require("../services/booking");

const router = require("express").Router();

const initBooking = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const { username } = req.parsedToken.data;
      const booking = await models.booking_file.findAll({
        where: {
          username: username,
        },
      });
      res.status(200).json({ status: "Success", code: 200, payload: booking });
    } catch (e) {
      res
        .status(400)
        .json({ status: "Failed", code: 400, payload: { msg: e } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const { username, id } = req.parsedToken.data;
      const data = {
        ...body,
        title: body.service_name,
        username: username,
        user_id: id,
        date_created: new Date(),
      };
      const booking = await models.booking_file.create(data);
      res.status(200).json({ status: "Success", code: 200, payload: booking });
    } catch (e) {
      res
        .status(400)
        .json({ status: "Failed", code: 400, payload: { msg: e } });
    }
  });

  router.put("/:id", authMiddleware, async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;

      const updated = await editBooking(Number(id), body);

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Updating admin is prohibited" },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User was successfully updated." },
      });
    } catch (e) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while updating the user." },
      });
    }
  });

  router.delete("/:id", authMiddleware, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await deleteBooking(id);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Error Deleting Booking" },
        });
      }
      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Booking was successfully deleted." },
      });
    } catch (error) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while deleting the booking." },
      });
    }
  });
  return router;
};

module.exports = {
  initRoutes: initBooking,
};
