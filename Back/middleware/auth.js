const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Vérifiez que l'en-tête Authorization est présent
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Token manquant !" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Ajoutez l'ID utilisateur à la requête
    req.auth = { userId: userId };
    next();
  } catch (error) {
    res.status(401).json({ error: "Requête non authentifiée !" });
  }
};
