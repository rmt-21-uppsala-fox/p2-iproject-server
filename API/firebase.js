const { default: axios } = require("axios");
const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.GOOGLE_API_CRED);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function refreshToken() {
  return axios({
    method: "post",
    url:
      "https://securetoken.googleapis.com/v1/token?key=" + process.env.WEB_API,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data:
      "grant_type=refresh_token&refresh_token=" +
      process.env.SAMPLE_REFRESH_TOKEN,
  });
}

module.exports = { admin, refreshToken };
