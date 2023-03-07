const app = require("./app");
const host = "127.0.0.1";

app.listen(3000, () => {
  console.log(`server is running at http://${host}:3000`);
});
