"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, statusCode = 401) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
