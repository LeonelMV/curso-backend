const testMiddleware = (req, res, next) => {
    console.log("Este es mi primer middleware!!!");
    console.log(req.url);
    next();
}

module.exports = testMiddleware;