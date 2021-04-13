import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rehmat Karim",
    email: "rehmat@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Huzaifa Khan",
    email: "huzaifa@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
