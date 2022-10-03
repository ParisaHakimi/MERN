const express = require("express");
const app = express();
const PORT = 8000;
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
const AllProductRoutes = require("./routes/product.routes");

AllProductRoutes(app);

app.listen(PORT, () => console.log(`sercer is listening on port ${PORT}`));
