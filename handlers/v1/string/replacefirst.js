/**
 * Operations on /v1/string/replacefirst
 */
module.exports = {
    /**
     * summary: 
     * description: replace first instance of old with new in str
     * parameters: str, old, new
     * produces: 
     * responses: 200, default
     */
    get: function replaceFirst(req, res, next) {
        let str = req.query.str;
        let searchStr = req.query.old;
        let replacement = req.query.new;

        let result = str.replace(searchStr, replacement);
        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
