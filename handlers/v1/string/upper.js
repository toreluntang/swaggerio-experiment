/**
 * Operations on /v1/string/upper
 */
module.exports = {
    /**
     * summary: 
     * description: Turn the string in to uppercase
     * parameters: str
     * produces: 
     * responses: 200, default
     */
    get: function toUpper(req, res, next) {
        let str = req.query.str;
        let result = str.toUpperCase();

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
