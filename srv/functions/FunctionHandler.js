"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const cds_routing_handlers_1 = require("cds-routing-handlers");
const entities_1 = require("../entities");
/**
 * Function handler.
 *
 * @export
 * @class FunctionHandler
 */
let FunctionHandler = class FunctionHandler {
    /**
     * @memberof FunctionHandler
     */
    async submitOrder(book, amount, req) {
        const n = await cds
            .update(entities_1.SanitizedEntity.Book)
            .with({ stock: { "-=": amount } })
            .where({ ID: book.ID, stock: { ">=": amount } });
        n > 0 || req.error(409, `${amount} exceeds stock for book #${book}`);
    }
};
__decorate([
    cds_routing_handlers_1.Func(entities_1.ActionSubmitOrder.name),
    __param(0, cds_routing_handlers_1.Param(entities_1.ActionSubmitOrder.paramBook)),
    __param(1, cds_routing_handlers_1.Param(entities_1.ActionSubmitOrder.paramAmount)),
    __param(2, cds_routing_handlers_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Promise)
], FunctionHandler.prototype, "submitOrder", null);
FunctionHandler = __decorate([
    cds_routing_handlers_1.Handler()
], FunctionHandler);
exports.FunctionHandler = FunctionHandler;
