const validator = require('../helpers/validate');
const saveItem = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    age: 'required|int',
    gender: 'required|string',
    email: 'required|email',
    major: 'required|string',
    enrollmentYear: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveItem
};