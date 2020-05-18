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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionHandler = void 0;
const cds_1 = __importDefault(require("@sap/cds"));
const cds_routing_handlers_1 = require("cds-routing-handlers");
const entities_1 = require("../entities");
/**
 * Function handler.
 *
 * @export
 * @class FunctionHandler
 */
let FunctionHandler = /** @class */ (() => {
    let FunctionHandler = class FunctionHandler {
        /**
         * @memberof FunctionHandler
         */
        async submitOrder(book, amount, req) {
            const n = await cds_1.default
                .update(entities_1.CatalogService.SanitizedEntity.Book)
                .with({ stock: { "-=": amount } })
                .where({ ID: book.ID, stock: { ">=": amount } });
            n > 0 || req.error(409, `${amount} exceeds stock for book #${book}`);
        }
    };
    __decorate([
        cds_routing_handlers_1.Func(entities_1.CatalogService.ActionSubmitOrder.name),
        __param(0, cds_routing_handlers_1.Param(entities_1.CatalogService.ActionSubmitOrder.paramBook)),
        __param(1, cds_routing_handlers_1.Param(entities_1.CatalogService.ActionSubmitOrder.paramAmount)),
        __param(2, cds_routing_handlers_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Number, Object]),
        __metadata("design:returntype", Promise)
    ], FunctionHandler.prototype, "submitOrder", null);
    FunctionHandler = __decorate([
        cds_routing_handlers_1.Handler()
    ], FunctionHandler);
    return FunctionHandler;
})();
exports.FunctionHandler = FunctionHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb25IYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9GdW5jdGlvbkhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJCO0FBQzNCLCtEQUFpRTtBQUNqRSwwQ0FBNkM7QUFFN0M7Ozs7O0dBS0c7QUFFSDtJQUFBLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7UUFDeEI7O1dBRUc7UUFFSSxLQUFLLENBQUMsV0FBVyxDQUMrQixJQUEwQixFQUN4QixNQUFjLEVBQzVELEdBQVE7WUFFZixNQUFNLENBQUMsR0FBRyxNQUFNLGFBQUc7aUJBQ2QsTUFBTSxDQUFDLHlCQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztpQkFDM0MsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7aUJBQ2pDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckQsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sNEJBQTRCLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQztLQUNKLENBQUE7SUFYRztRQURDLDJCQUFJLENBQUMseUJBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFFdkMsV0FBQSw0QkFBSyxDQUFDLHlCQUFjLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDakQsV0FBQSw0QkFBSyxDQUFDLHlCQUFjLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDbkQsV0FBQSwwQkFBRyxFQUFFLENBQUE7Ozs7c0RBT1Q7SUFmUSxlQUFlO1FBRDNCLDhCQUFPLEVBQUU7T0FDRyxlQUFlLENBZ0IzQjtJQUFELHNCQUFDO0tBQUE7QUFoQlksMENBQWUifQ==