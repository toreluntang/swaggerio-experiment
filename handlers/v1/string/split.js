/**
 * Operations on /v1/string/split
 */
module.exports = {
    /**
     * summary: 
     * description: Splits the given string with a chosen separator. If none is provided the string is split by &#39; &#39;
     * parameters: str, sep
     * produces: 
     * responses: 200, default
     */
    get: function split(req, res, next) {
        let str = req.query.str;
        let separator = req.query.sep || ' ';
        let result = str.split(separator);

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
