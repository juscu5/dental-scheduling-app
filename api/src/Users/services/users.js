const { models } = require("../../_shared/config/DatabaseConfig");
const { encryptSHA1 } = require("../../_shared/utilities/encryption");
const { signToken } = require("../../_shared/middleware/AuthServices");
const moment = require("moment");

const addUser = async (body) => {
  try {
    const returnObj = {
      firstname: body.firstname,
      lastname: body.lastname,
      address: body.address,
      username: body.username,
      password: encryptSHA1(body.password),
      userlevel: "PATIENT",
      date_created: moment(),
      is_active: true,
    };

    const checkUsername = await models.user_file.findOne({
      where: {
        username: body.username
      }
    })

    if(checkUsername){
      return false
    }

    return await models.user_file.create(returnObj);
  } catch (error) {
    throw error;
  }
};

const editUser = async (id, body) => {
  try {
    const data = {
      id: body.id,
      firstname: body.firstname,
      lastname: body.lastname,
      address: body.address,
      username: body.username,
      password: encryptSHA1(body.password),
      image: body.image,
      userlevel: body.userlevel,
      dentist_id: body.dentist_id,
      date_created: moment(body.date_created),
      is_active: true,
    };
    if (!id) {
      throw new Error("User ID is required");
    }

    if (parseInt(id) === 0 || body.usrname === "admin") {
      console.log("Can't Update Admin");
      return false;
    } else {
      if (body.password === "") {
        const updateUser = await models.user_file.update(data, {
          where: { id: id },
        });
        if (updateUser === 0) {
          return false;
        }
      } else {
        const updateUser = await models.user_file.update(dataWPass, {
          where: { id: id },
        });
        if (updateUser === 0) {
          return false;
        }
      }
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    if (!id) {
      throw new Error("User id is required");
    }

    if (parseInt(id) === 0) {
      console.log("Can't delete Admin");
      return false;
    } else {
      const deletedRows = await models.user_file.destroy({
        where: { id: id },
      });

      if (deletedRows === 0) {
        return false;
      }
      return true;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMe = async (id) => {
  const me = await models.user_file.findOne({ where: { id: id } });
  return me;
};

const login = async (req) => {
  try {
    const findUser = await models.user_file.findOne({
      where: {
        username: req.username,
        password: encryptSHA1(req.password),
      },
      raw: true,
    });

    if (!findUser) {
      return {
        err: {
          code: 401,
          status: "No user found",
        },
        data: findUser,
      };
    }

    const token = signToken(findUser);

    return {
      err: null,
      data: {
        code: 200,
        status: "Successfully logged in",
        payload: {
          BearerToken: token,
        },
      },
    };
  } catch (error) {
    return {
      err: {
        code: 500,
        status: error.message,
      },
      data: null,
    };
  }
};

const changePass = async (req) => {
  try {
    const data = {
      password: encryptSHA1(req.password),
    };

    const findUser = await models.user_file.findOne({
      where: {
        username: req.username,
        password: encryptSHA1(req.password),
      },
      raw: true,
    });

    if (!findUser) {
      return {
        err: {
          code: 401,
          status: "Invalid Password",
        },
        data: findUser,
      };
    } else {
      await models.user_file.update(data, {
        where: { username: req.username },
      });
    }

    return {
      err: null,
      data: {
        code: 200,
        status: "Password Change Successfully",
      },
    };
  } catch (error) {
    return {
      err: {
        code: 500,
        status: error.message,
      },
      data: null,
    };
  }
};

module.exports = {
  addUser,
  editUser,
  deleteUser,
  getMe,
  login,
  changePass,
};
