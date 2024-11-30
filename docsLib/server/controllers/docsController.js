// controller for homepage
export function homepage(req, res) {
  res.status(200).json({ msg: "welocme to the homepage object" });
}

// controller for about page
export function abutPage(req, res) {
  res.status(200).send("welcome to about page");
}
