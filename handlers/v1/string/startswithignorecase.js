/**
 * Operations on /v1/string/startswithignorecase
 */
module.exports = {
    /**
     * summary: 
     * description: Checks if a string starts with a value, while ignoring case (upper/lower)
     * parameters: str, search
     * produces: 
     * responses: 200, default
     */
    get: function startsWithIgnoreCase(req, res, next) {
        let str = req.query.str.toLowerCase();
        let searchStr = req.query.search.toLowerCase();
        let result = str.startsWith(searchStr);

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
