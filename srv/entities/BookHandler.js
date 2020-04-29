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
const entities_1 = require("./../entities");
/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
let BookHandler = class BookHandler {
    /**
     * @memberof BookHandler
     */
    async addDiscount(book, jwt) {
        for (const each of book) {
            if (each.stock > 111)
                each.title += ` -- 11% discount!`;
        }
    }
};
__decorate([
    cds_routing_handlers_1.AfterRead(),
    __param(0, cds_routing_handlers_1.Entities()), __param(1, cds_routing_handlers_1.Jwt()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], BookHandler.prototype, "addDiscount", null);
BookHandler = __decorate([
    cds_routing_handlers_1.Handler(entities_1.SanitizedEntity.Book)
], BookHandler);
exports.BookHandler = BookHandler;
