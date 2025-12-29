const rateLimitStore = new Map();

const rateLimit = (maxRequests = 5, windowMs = 60000) => {
    return (req, res, next) =>{
        const identifier = req.ip || req.connection.remoteAddress;
        const now = Date.now();
        
        if(!rateLimitStore.has(identifier)){
            rateLimitStore.set(identifier, {
                count:1,
                resetTime : now + windowMs
            });
            return next();
        }
    const record = rateLimitStore.get(identifier);

    if(now > record.resetTime){
        record.count = 1;
        record.resetTime = now + windowMs;
        return next();

    }

    if(record.count >= maxRequests){
        return res.status(429).json({
            success : false,
            message : 'Too many requests. Please try again later.'
        });
    }
    record.count++;
    next();

    };
};


module.exports = rateLimit;