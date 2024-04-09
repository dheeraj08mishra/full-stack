import { debug } from "console";
import fs from "fs";
export const getUserDetails = (req, res) => {
  const { userId } = req.params;
  try {
    const data = fs.readFileSync("mock/userMock.json");
    const searchData = JSON.parse(data)[userId];
    res.status(200).send(searchData );
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const createUserDetails = (req, res) => {
  debug
  const userData = req.body;
  const usersData = JSON.parse(fs.readFileSync('mock/userMock.json'));
  const newUserId = Math.random();
  usersData[newUserId] = req.body;
  fs.writeFileSync('mock/userMock.json', JSON.stringify(usersData));
  res.status(200).send({ ...userData, id: newUserId });
};

export const updateUserDetails = (req, res) => {
  const { userId } = req.params;
  const userData = req.body;
  const usersData = JSON.parse(fs.readFileSync('mock/userMock.json'));
  usersData[userId] = req.body;
  fs.writeFileSync('mock/userMock.json', JSON.stringify(usersData));
  res.status(200).send({ ...userData, id: userId });
};

export const deleteUserDetails = (req, res) => {
  const { userId } = req.params;
  const usersData = JSON.parse(fs.readFileSync('mock/userMock.json'));
  delete usersData[userId];
  fs.writeFileSync('mock/userMock.json', JSON.stringify(usersData));
  res.status(200).send("User deleted");
};



