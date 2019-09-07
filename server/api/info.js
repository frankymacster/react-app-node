module.exports = {
  get: async (req, res) => {
    res.json({
      data: {
        c: "c",
        d: "d",
        e: "e"
      }
    });
  }
};
