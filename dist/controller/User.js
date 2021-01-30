"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class User {
    async create(ctx, next) {
        const { uid, uname } = ctx.request.body;
        console.log(uid, uname);
        ctx.body = [uid, uname];
    }
}
exports.UserController = new User();
