const getRequestMetadata = (req) => ({
    ipAddress : req.ip || req.connection.remoteAddress,
    userAgent : req.headers['user-agent']
});

