
const upperCase = (txt) => {
    if (typeof (txt) === 'string') {
        return txt.toUpperCase();
    }
    return txt;
}

module.exports = { upperCase }