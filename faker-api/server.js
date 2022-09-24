const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

const companyObject = [
  {
    _id,
    name,
    address: {
      street,
      city,
      state,
      zipCode,
      county,
    },
  },
];
const createUserObject = () => {
  const fakeUserObject = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstname: faker.name.firstname(),
    _id: faker.random.numeric(5),
  };
  return fakeUserObject;
};
app.get("/api/users/new", (req, res) => {
  const newFakeUser = createUserObject();
  console.log(newFakeUser);
  res.json(newFakeUser);
});
