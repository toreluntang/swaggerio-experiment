/**
 * Operations on /v1/string/startswith
 */
module.exports = {
    /**
     * summary: 
     * description: Checks if a string starts with a value
     * parameters: str, search
     * produces: 
     * responses: 200, default
     */
    get: function startsWith(req, res, next) {
        let str = req.query.str;
        let searchStr = req.query.search;
        let result = str.startsWith(searchStr);

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
