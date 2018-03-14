/**
 * Operations on /v1/string/lower
 */
module.exports = {
    /**
     * summary: 
     * description: Turn the string in to lowercase
     * parameters: str
     * produces: 
     * responses: 200, default
     */
    get: function toLower(req, res, next) {
        let str = req.query.str;
        let result = str.toLowerCase();

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
