const upperCase = (txt) => {
  if (typeof txt === "string") {
    return txt.toUpperCase();
  }
  return txt;
};

const lowerCase = (txt) => {
  if (typeof txt === "string") {
    return txt.toLowerCase();
  }
  return txt;
};

module.exports = { upperCase, lowerCase };
