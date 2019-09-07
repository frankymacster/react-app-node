module.exports = {
  get: async (req, res) => {
    res.json({
      data: {
        a: "a",
        b: "b"
      }
    });
  }
};
