const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  MISSING_FIELDS: 400,
  INVALID_FIELD_INPUT: 422,
};

const mapError = (type) => errorMap[type];

module.exports = mapError;