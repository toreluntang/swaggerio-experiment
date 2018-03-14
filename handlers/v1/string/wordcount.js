/**
 * Operations on /v1/string/wordcount
 */
module.exports = {
    /**
     * summary: 
     * description: Count the amount of words in the string
     * parameters: str
     * produces: 
     * responses: 200, default
     */
    get: function wordCount(req, res, next) {
        let str = req.query.str;

        let words = str.split(' ').filter(item => item !== '');
        let result = words.length;

        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
