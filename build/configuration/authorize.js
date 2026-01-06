"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
var express_jwt_1 = require("express-jwt");
var config_1 = require("./config");
function authorize(roles) {
    if (roles === void 0) { roles = []; }
    var secret = config_1.jwtSecret.secret;
    // roles param can be a single role string (e.g. Role.User or 'User')
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return [
        // authenticate JWT token and attach user to request object (req.user)
        (0, express_jwt_1.expressjwt)({ secret: secret, algorithms: ['HS256'] }),
        // authorize based on user role
        function (req, res, next) {
            if (roles.length && !roles.includes(req.user.role)) {
                // user's role is not authorized
                return res.status(401).json({ message: 'Unauthorized' });
            }
            // authentication and authorization successful
            next();
        }
    ];
}
