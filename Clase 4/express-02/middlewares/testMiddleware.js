const testMiddleware = (req, res, next) => {
    console.log("Este es mi primer middleware!!!");
    console.log(req.url);
    next();
}

const testMiddleware2 = (req, res, next) => {
    console.log("Este es mi segundo middleware!!!");
    console.log(req.url);
    next();
}

module.exports = {
    testMiddleware,
    testMiddleware2,
};