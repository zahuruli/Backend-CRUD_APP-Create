const { v4: uuidv4 } = require("uuid");
const Users = [
  {
    id: uuidv4(),
    name: "Zahurul islam",
    desc: "I am MD. Zahurul islam",
    active: true,
  },
  {
    id: uuidv4(),
    name: "Anisul islam",
    desc: "I am MD. Anisul islam",
    active: true,
  },

  {
    id: uuidv4(),
    name: "Zahangir Alam",
    desc: "I am Md. Zahangir Alam",
    active: true,
  },
];

module.exports = Users;
