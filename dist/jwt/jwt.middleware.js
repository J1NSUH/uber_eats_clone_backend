"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = JwtMiddleware;
function JwtMiddleware(req, res, next) {
    console.log(req.headers);
    next();
}
//# sourceMappingURL=jwt.middleware.js.map