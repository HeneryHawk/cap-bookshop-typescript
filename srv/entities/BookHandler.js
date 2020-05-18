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
exports.BookHandler = void 0;
const cds_routing_handlers_1 = require("cds-routing-handlers");
const entities_1 = require("../entities");
/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
let BookHandler = /** @class */ (() => {
    let BookHandler = class BookHandler {
        /**
         * @memberof BookHandler
         */
        async addDiscount(book, req) {
            console.log("Read Books");
            for (const each of book) {
                if (each.stock > 111)
                    each.title += ` -- 11% discount!`;
            }
        }
    };
    __decorate([
        cds_routing_handlers_1.AfterRead(),
        __param(0, cds_routing_handlers_1.Entities()), __param(1, cds_routing_handlers_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Object]),
        __metadata("design:returntype", Promise)
    ], BookHandler.prototype, "addDiscount", null);
    BookHandler = __decorate([
        cds_routing_handlers_1.Handler(entities_1.CatalogService.SanitizedEntity.Book)
    ], BookHandler);
    return BookHandler;
})();
exports.BookHandler = BookHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXRpZXMvQm9va0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQXdFO0FBQ3hFLDBDQUE2QztBQUU3Qzs7Ozs7R0FLRztBQUVIO0lBQUEsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztRQUNwQjs7V0FFRztRQUVJLEtBQUssQ0FBQyxXQUFXLENBQWEsSUFBNEIsRUFBUyxHQUFRO1lBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFMUIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHO29CQUFFLElBQUksQ0FBQyxLQUFLLElBQUksbUJBQW1CLENBQUM7YUFDM0Q7UUFDTCxDQUFDO0tBQ0osQ0FBQTtJQVBHO1FBREMsZ0NBQVMsRUFBRTtRQUNjLFdBQUEsK0JBQVEsRUFBRSxDQUFBLEVBQWdDLFdBQUEsMEJBQUcsRUFBRSxDQUFBOzs7O2tEQU14RTtJQVhRLFdBQVc7UUFEdkIsOEJBQU8sQ0FBQyx5QkFBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7T0FDaEMsV0FBVyxDQVl2QjtJQUFELGtCQUFDO0tBQUE7QUFaWSxrQ0FBVyJ9