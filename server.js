import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const audienceId = "YOUR_AUDIENCE_ID";
  const apiKey = "YOUR_API_KEY";

  console.log(audienceId, apiKey);

  const url = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}`;

  try {
    const response = await axios.post(url, jsonData, {
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Subscription failed", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
