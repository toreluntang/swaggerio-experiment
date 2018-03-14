/**
 * Operations on /v1/string/containsignorecase
 */
module.exports = {
    /**
     * summary: 
     * description: Checks if str contains substr, ignoring case sensitivity
     * parameters: str, substr
     * produces: 
     * responses: 200, default
     */
    get: function containsIgnoreCase(req, res, next) {
        let str = req.query.str.toLowerCase();
        let subStr = req.query.substr.toLowerCase();
        let result = str.indexOf(subStr) !== -1;

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
