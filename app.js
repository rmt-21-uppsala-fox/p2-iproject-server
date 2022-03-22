if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/paintings", async (request, response) => {
  try {
    const paintingsData = await axios.get(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.RIJKSMUSEUM_KEY}&involvedMaker=Rembrandt+van+Rijn&toppieces=true`
    );
    response.status(200).json({ data: paintingsData.data });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});
app.post("/wikis", async (request, response) => {
  try {
    const title = request.body.data
      .split(" ")
      .join("_")
      .split(",")
      .join("_")
      .split("’")
      .join("_")
      .split("‘")
      .join("_");
    const wikisData = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=allpages&inprop=url&gapfrom=${title}&gaplimit=5`
    );
    console.log(wikisData.data.query.pages);
    response.status(200).json({
      data: wikisData.data.query.pages[
        Object.keys(wikisData.data.query.pages)[0]
      ].fullurl,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
