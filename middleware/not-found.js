const notFoundMiddleware = (req, res) =>
  res.status(404).send("Endpoint does not exist");

export default notFoundMiddleware;
