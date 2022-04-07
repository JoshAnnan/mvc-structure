const welcome = (req, res) => {
  res.send("<h1>Hello world</h1>");
};

const greet = (req, res) => {
  res.send("<h1>Good Morning Fellows 👋</h1>");
};

module.exports = {
  welcome,
  greet,
};
