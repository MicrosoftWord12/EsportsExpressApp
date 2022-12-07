/**
 *
 * @param {string} pageUrl
 * @param {string} methodType
 * @param {string} buttonName
 * @returns
 */
module.exports = (pageUrl, methodType, buttonName, hidden) => {
    return {
        page: {
            url: pageUrl,
            method: methodType,
            nameOfButton: buttonName,
            hidden,
        },
    };
};
