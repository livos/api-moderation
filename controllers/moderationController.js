import axios from "axios";

const apiKey = "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";

const getModerationStatus = async (req, res) => {
  const { text } = req.body;
  console.log(text);

  if (text) {
    const data = { input: `${text}` };

    axios({
      method: "post",
      url: "https://api.openai.com/v1/moderations",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: data,
    })
      .then((response) => {
        const { categories, flagged } = response.data.results[0];
        const results = { categories, flagged };

        res.status(200).send({
          results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.status(400).send({ message: "No text provided" });
  }
};

export { getModerationStatus };