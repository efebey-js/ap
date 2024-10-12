app.get("/chatgpt", async (req, res) => {
  const soru = req.query.soru;
  if (!soru) {
    return;
    res.send("<title>Chatgpt API</title>");
    res.json({
      error: "Mesaj belirtilmedi.",
    });
  }
  const chatgpt = await axios.get(
    `https://api.kastg.xyz/api/ai/chatgptV4?prompt=${soru}`
  );

  const cevap = chatgpt.data.result[0].response;

  const ceviriResponse = await axios.get(
    `https://api.popcat.xyz/translate?to=tr&text=${cevap}`
  );
  const format = ceviriResponse.data.translated;

  res.json({
    yanıt: format,
  });
});
