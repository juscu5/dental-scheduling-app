const { models } = require("../../_shared/config/DatabaseConfig");
const { encryptSHA1 } = require("../../_shared/utilities/Encryption");
const { authMiddleware } = require("../../_shared/middleware");
const {
  getMe,
  login,
  changePass,
  addUser,
  editUser,
  deleteUser,
} = require("../services/users");

const router = require("express").Router();

const initUsers = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const user = await models.user_file.findAll();
      res.status(200).json({ status: "Success", code: 200, payload: user });
    } catch (e) {
      res
        .status(400)
        .json({ status: "Failed", code: 400, payload: { msg: e } });
    }
  });

  router.get("/pass", authMiddleware, async (req, res) => {
    try {
      let pass = encryptSHA1(req.parsedToken.data.usrpwd);
      await verPass(pass);
    } catch (error) {}
  });

  router.get("/me", authMiddleware, async (req, res) => {
    try {
      const myself = await getMe(req.parsedToken.data.id);

      res
        .status(200)
        .json({ status: "Your profile", code: 200, payload: myself });
    } catch (error) {
      res
        .status(400)
        .json({ status: "Your profile", code: 400, payload: { msg: error } });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const { body } = req;
      const user = await addUser(body);

      if (!user) {
        return res.status(401).json({
          status: "Error",
          code: 401,
          payload: { msg: "User Already Taken" },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User Addedd Successfully" },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.put("/:recid", authMiddleware, async (req, res) => {
    try {
      const { recid } = req.params;
      const { body } = req;
      const updated = await editUser(recid, body);

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

  router.delete("/:recid", authMiddleware, async (req, res) => {
    try {
      const { recid } = req.params;
      const deleted = await deleteUser(recid);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Admin deletion is Prohibited" },
        });
      }
      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "User was successfully deleted." },
      });
    } catch (error) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occurred while deleting the User." },
      });
    }
  });

  router.post("/login", async (req, res) => {
    const data = await login(req.body);
    let resCode;
    if (data.err === null) {
      resCode = data.data.code;
    } else {
      resCode = data.err.code;
    }
    const final = data.err === null ? data.data : data;
    res.status(resCode).json(final);
  });

  router.post("/changepass", authMiddleware, async (req, res) => {
    try {
      const { err } = await changePass(req.body);

      if (err) {
        return res.status(err.code).json({
          status: "Failure",
          code: 500,
          payload: { msg: "Incorrect old password." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Password Successfully Update" },
      });
    } catch (e) {
      res.status(500).json({
        status: "Failure",
        code: 500,
        payload: { msg: "An error occured while updating the password" },
      });
    }
  });

  return router;
};

module.exports = {
  initRoutes: initUsers,
};
