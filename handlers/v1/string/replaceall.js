/**
 * Operations on /v1/string/replaceall
 */
module.exports = {
    /**
     * summary: 
     * description: replace all instance of old with new in string
     * parameters: str, old, new
     * produces: 
     * responses: 200, default
     */
    get: function replaceAll(req, res, next) {
        let str = req.query.str;
        let searchStr = req.query.old;
        let replacement = req.query.new;

        let result = str.replace(new RegExp(searchStr, 'g'), replacement);

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
