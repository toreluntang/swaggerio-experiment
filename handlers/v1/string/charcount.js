/**
 * Operations on /v1/string/charcount
 */
module.exports = {
    /**
     * summary: 
     * description: Count the amount of characters in the string
     * parameters: str
     * produces: 
     * responses: 200, default
     */
    get: function charCount(req, res, next) {
        let str = req.query.str;
    let result = str.length;
    req.query.result = result;
    res.status(200).send(JSON.stringify(req.query));
    }
};
