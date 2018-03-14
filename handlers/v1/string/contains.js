/**
 * Operations on /v1/string/contains
 */
module.exports = {
    /**
     * summary: 
     * description: Checks if str contains substr
     * parameters: str, substr
     * produces: 
     * responses: 200, default
     */
    get: function contains(req, res, next) {
        let str = req.query.str;
        let subStr = req.query.substr;
        let result = str.indexOf(subStr) !== -1;

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
