if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const uploadFile = require("./middleware/multerConfig");
const unggah = require("unggah");

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
    const wikisData0 = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=info&inprop=url&search=van_gogh_self_portrait`
    );
    const wikisData1 = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=info&inprop=url&search=the_night_watch`
    );
    const wikisData2 = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=info&inprop=url&search=fishing_for_souls`
    );
    const videoData0 = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&type=video&q=gogh_self_portrait_analysis`
    );
    // const videoData1 = await axios.get(
    //   `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&type=video&q=night_watch_analysis`
    // );
    // const videoData2 = await axios.get(
    //   `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&type=video&q=fishing_for_souls_painting`
    // );
    // console.log(videoData0, videoData1, videoData2);

    response.status(200).json({
      data0: wikisData0.data[3][0],
      data1: wikisData1.data[3][0],
      data2: wikisData2.data[3][0],
      // videoData0: `https://www.youtube.com/watch?v=${videoData0.data.items[0].id.videoId}`,
      // videoData1: `https://www.youtube.com/watch?v=${videoData1.data.items[0].id.videoId}`,
      // videoData2: `https://www.youtube.com/watch?v=${videoData2.data.items[0].id.videoId}`,
    });
  } catch (error) {
    console.log(error.response);
    response.status(500).json({ message: "Internal server error" });
  }
});
app.post("/upload", async (request, response) => {
  try {
    await uploadFile(request, response);

    console.log(request.file, 4567);
    console.log(__dirname + "\\images-dump\\uploadForGoogle.jpeg");

    const storage = unggah.gcs({
      keyFilename: "mubuyo-a5c85-28c4de9c26d3.json",
      bucketName: "mubuyo-photos-bucket",
      rename: (req, file) => {
        return `${file.originalname}`; // this is the default
      },
    });

    if (request.file == undefined) {
      return response.status(400).send({ message: "Please upload a file!" });
    }
    response
      .status(200)
      .type("jpeg")
      .sendFile(__dirname + "\\images-dump\\uploadForGoogle.jpeg");
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
