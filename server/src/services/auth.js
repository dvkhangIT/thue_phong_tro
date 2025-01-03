import { where } from "sequelize";
import db from "../models";
import bcrybt from "bcryptjs";
import { v4 } from "uuid";
import jwt from "jsonwebtoken";
require("dotenv").config();

const hashPassword = (password) =>
  bcrybt.hashSync(password, bcrybt.genSaltSync(12));
export const registerService = ({ name, phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: hashPassword(password),
          id: v4(),
        },
      });
      const token =
        response[1] &&
        jwt.sign(
          { id: response[0].id, phone: response[0].phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Register successflly!"
          : "Phone number has been aldready used!",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        Where: { phone },
        raw: true,
      });
      const isCorrectPassword =
        response && bcrybt.compareSync(password, response.password);
      const token =
        isCorrectPassword &&
        jwt.sign(
          { id: response.id, phone: response.phone },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
      resolve({
        err: token ? 0 : 2,
        msg: token
          ? "Login is successflly!"
          : response
          ? "Password is wrong!"
          : "Phone number not found!",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
