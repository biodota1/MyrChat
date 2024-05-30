import pool from "../../db";
import queries from "./queries";

const controller = {
  getUsers: (req, res) => {
    pool.query(queries.getUsers(), (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  },
  getUserById: (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById(id), (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  },
  addUser: (req, res) => {
    const { username, password } = req.body;
    const name = username;
    const pass = password;
    pool.query(queries.checkUserExist(name), (error, results) => {
      if (results.rows.length) {
        return res.send("Username already exist.");
      }
      pool.query(queries.addUser(name, pass), (error, results) => {
        if (error) throw error;
        res.status(201).send("User created successfully!");
      });
    });
  },
  removeUser: (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById(id), (error, results) => {
      const noUserFound = !results.rows.length;
      if (noUserFound) {
        return res.send("User does not exist.");
      }
      pool.query(queries.deleteUser(id), (error, results) => {
        return res.status(201).send("User deleted successfully.");
      });
    });
  },
  updateUser: (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password } = req.body;
    pool.query(queries.getUserById(id), (error, results) => {
      const noUserFound = !results.rows.length;
      if (noUserFound) {
        return res.send("User does not exist.");
      }
      pool.query(queries.updateUser(id, username), (error, results) => {
        if (error) throw error;
        return res.send("user updated successfully!");
      });
    });
  },
};

export default controller;
