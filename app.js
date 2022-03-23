if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const uploadFile = require("./middleware/multerConfig");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/paintings", async (request, response) => {
  try {
    const { URL_0, URL_1, URL_2 } = request.body;
    const imageData_0 = await axios.get(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.RIJKSMUSEUM_KEY}${URL_0}`
    );
    const imageData_1 = await axios.get(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.RIJKSMUSEUM_KEY}${URL_1}`
    );
    const imageData_2 = await axios.get(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.RIJKSMUSEUM_KEY}${URL_2}`
    );
    response.status(200).json({
      imageData_0: imageData_0.data,
      imageData_1: imageData_1.data,
      imageData_2: imageData_2.data,
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
  }
});
app.post("/wikis", async (request, response) => {
  try {
    // console.log(request.body);
    let { title } = request.body;
    title
      .split(" ")
      .join("_")
      .split(",")
      .join("_")
      .split("’")
      .join("_")
      .split("‘")
      .join("_");
    console.log(title);
    const wikisData = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=allpages&inprop=url&gapfrom=${title}&gaplimit=5`
    );
    console.log(
      wikisData.data.query.pages[Object.keys(wikisData.data.query.pages)[0]]
        .fullurl
    );
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
app.post("/upload", async (request, response) => {
  try {
    await uploadFile(request, response);

    console.log(request.file);

    if (request.file == undefined) {
      return response.status(400).send({ message: "Please upload a file!" });
    }
    response.status(200).json({ message: "Upload success" });
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }
    response.status(500).send({
      message: `Could not upload the file: ${request.file.originalname}. ${err}`,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
