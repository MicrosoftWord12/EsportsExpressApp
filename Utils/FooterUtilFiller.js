module.exports = (url, methodType, buttonName) => {
    return {
        page: {
            url: url,
            methodType: methodType,
            nameOfButton: buttonName,
        },
    };
};
