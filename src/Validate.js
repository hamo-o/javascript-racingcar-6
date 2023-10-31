import ERROR from './constants/Error.js';

const Validate = {
  checkNameLength(name) {
    if (name.length > 5 || name.length < 1) {
      throw new Error(ERROR.nameLength);
    }
  },
  checkNameExist(names) {
    if (!names) {
      throw new Error(ERROR.carName);
    }
  },
  checkNaturalNum(times) {
    const pattern = /^[1-9]d*$/;
    if (!pattern.test(times)) {
      throw new Error(ERROR.attemptNum);
    }
  },
};
export default Validate;