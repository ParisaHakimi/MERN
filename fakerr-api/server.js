const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUserObject = () => {
  return {
    password: faker.internet.password(15),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastname: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
};

const createCompony = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
  const newUser = createUserObject();
  res.json(newUser);
});
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompony();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUserObject();
  const newCompany = createCompony();
  const newResponse={
    user:newUser,
    company:newCompany
  }
  res.json(newResponse);
});
app.listen(port, () => console.log(`runnint at port ${port}`));
