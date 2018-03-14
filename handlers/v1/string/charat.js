/**
 * Operations on /v1/string/charat
 */
module.exports = {
    /**
     * summary: 
     * description: Get the character at a specified position
     * parameters: str, pos
     * produces: 
     * responses: 200, default
     */
    get: function charAt(req, res, next) {
        
        let str = req.query.str;
        let pos = req.query.pos;
        let result = str.charAt(pos);
    
        req.query.result = result;
        res.status(200).send(JSON.stringify(req.query));
    }
};
