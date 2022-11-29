/**
 *
 * @param {string} pageUrl
 * @param {string} methodType
 * @param {string} buttonName
 * @returns
 */
module.exports = (pageUrl, methodType, buttonName) => {
    return {
        page: {
            url: pageUrl,
            method: methodType,
            nameOfButton: buttonName,
        },
    };
};
