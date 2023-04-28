const { nameValidation, nameLength } = require('../schemas/productsSchema');

const productNameValidation = (req, res, next) => {
  const { name } = req.body;

  const { error } = nameValidation.validate(name);

  if (error) {
    return res
      .status(400)
      .json({ message: error.message });
  }

  next();
};

const productNameLength = (req, res, next) => {
  const { name } = req.body;

  const { error } = nameLength.validate(name);

  if (error) {
    return res
      .status(422)
      .json({ message: error.message });
  }

  next();
};

module.exports = {
  productNameValidation,
  productNameLength,
};