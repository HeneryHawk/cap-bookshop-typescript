"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanitizedEntity = exports.Entity = exports.CatalogService = exports.sap = void 0;
var sap;
(function (sap) {
    var capire;
    (function (capire) {
        var bookshop;
        (function (bookshop) {
            let Entity;
            (function (Entity) {
                Entity["Author"] = "sap.capire.bookshop.Author";
                Entity["Book"] = "sap.capire.bookshop.Book";
                Entity["Genre"] = "sap.capire.bookshop.Genre";
            })(Entity = bookshop.Entity || (bookshop.Entity = {}));
            let SanitizedEntity;
            (function (SanitizedEntity) {
                SanitizedEntity["Author"] = "Author";
                SanitizedEntity["Book"] = "Book";
                SanitizedEntity["Genre"] = "Genre";
            })(SanitizedEntity = bookshop.SanitizedEntity || (bookshop.SanitizedEntity = {}));
        })(bookshop = capire.bookshop || (capire.bookshop = {}));
    })(capire = sap.capire || (sap.capire = {}));
})(sap = exports.sap || (exports.sap = {}));
(function (sap) {
    var common;
    (function (common) {
        let Entity;
        (function (Entity) {
            Entity["CodeList"] = "sap.common.CodeList";
            Entity["Countries"] = "sap.common.Countries";
            Entity["Currencies"] = "sap.common.Currencies";
            Entity["Languages"] = "sap.common.Languages";
        })(Entity = common.Entity || (common.Entity = {}));
        let SanitizedEntity;
        (function (SanitizedEntity) {
            SanitizedEntity["CodeList"] = "CodeList";
            SanitizedEntity["Countries"] = "Countries";
            SanitizedEntity["Currencies"] = "Currencies";
            SanitizedEntity["Languages"] = "Languages";
        })(SanitizedEntity = common.SanitizedEntity || (common.SanitizedEntity = {}));
    })(common = sap.common || (sap.common = {}));
})(sap = exports.sap || (exports.sap = {}));
var CatalogService;
(function (CatalogService) {
    let ActionSubmitOrder;
    (function (ActionSubmitOrder) {
        ActionSubmitOrder["name"] = "submitOrder";
        ActionSubmitOrder["paramBook"] = "book";
        ActionSubmitOrder["paramAmount"] = "amount";
    })(ActionSubmitOrder = CatalogService.ActionSubmitOrder || (CatalogService.ActionSubmitOrder = {}));
    let Entity;
    (function (Entity) {
        Entity["Book"] = "CatalogService.Book";
        Entity["Currencies"] = "CatalogService.Currencies";
        Entity["Genre"] = "CatalogService.Genre";
    })(Entity = CatalogService.Entity || (CatalogService.Entity = {}));
    let SanitizedEntity;
    (function (SanitizedEntity) {
        SanitizedEntity["Book"] = "Book";
        SanitizedEntity["Currencies"] = "Currencies";
        SanitizedEntity["Genre"] = "Genre";
    })(SanitizedEntity = CatalogService.SanitizedEntity || (CatalogService.SanitizedEntity = {}));
})(CatalogService = exports.CatalogService || (exports.CatalogService = {}));
var Entity;
(function (Entity) {
    Entity["User"] = "User";
    Entity["Cuid"] = "cuid";
    Entity["Managed"] = "managed";
    Entity["Temporal"] = "temporal";
})(Entity = exports.Entity || (exports.Entity = {}));
var SanitizedEntity;
(function (SanitizedEntity) {
    SanitizedEntity["User"] = "User";
    SanitizedEntity["Cuid"] = "Cuid";
    SanitizedEntity["Managed"] = "Managed";
    SanitizedEntity["Temporal"] = "Temporal";
})(SanitizedEntity = exports.SanitizedEntity || (exports.SanitizedEntity = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBaUIsR0FBRyxDQXVDbkI7QUF2Q0QsV0FBaUIsR0FBRztJQUFDLElBQUEsTUFBTSxDQXVDMUI7SUF2Q29CLFdBQUEsTUFBTTtRQUFDLElBQUEsUUFBUSxDQXVDbkM7UUF2QzJCLFdBQUEsUUFBUTtZQTZCaEMsSUFBWSxNQUlYO1lBSkQsV0FBWSxNQUFNO2dCQUNkLCtDQUFxQyxDQUFBO2dCQUNyQywyQ0FBaUMsQ0FBQTtnQkFDakMsNkNBQW1DLENBQUE7WUFDdkMsQ0FBQyxFQUpXLE1BQU0sR0FBTixlQUFNLEtBQU4sZUFBTSxRQUlqQjtZQUNELElBQVksZUFJWDtZQUpELFdBQVksZUFBZTtnQkFDdkIsb0NBQWlCLENBQUE7Z0JBQ2pCLGdDQUFhLENBQUE7Z0JBQ2Isa0NBQWUsQ0FBQTtZQUNuQixDQUFDLEVBSlcsZUFBZSxHQUFmLHdCQUFlLEtBQWYsd0JBQWUsUUFJMUI7UUFDTCxDQUFDLEVBdkMyQixRQUFRLEdBQVIsZUFBUSxLQUFSLGVBQVEsUUF1Q25DO0lBQUQsQ0FBQyxFQXZDb0IsTUFBTSxHQUFOLFVBQU0sS0FBTixVQUFNLFFBdUMxQjtBQUFELENBQUMsRUF2Q2dCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQXVDbkI7QUFDRCxXQUFpQixHQUFHO0lBQUMsSUFBQSxNQUFNLENBMkIxQjtJQTNCb0IsV0FBQSxNQUFNO1FBZXZCLElBQVksTUFLWDtRQUxELFdBQVksTUFBTTtZQUNkLDBDQUFnQyxDQUFBO1lBQ2hDLDRDQUFrQyxDQUFBO1lBQ2xDLDhDQUFvQyxDQUFBO1lBQ3BDLDRDQUFrQyxDQUFBO1FBQ3RDLENBQUMsRUFMVyxNQUFNLEdBQU4sYUFBTSxLQUFOLGFBQU0sUUFLakI7UUFDRCxJQUFZLGVBS1g7UUFMRCxXQUFZLGVBQWU7WUFDdkIsd0NBQXFCLENBQUE7WUFDckIsMENBQXVCLENBQUE7WUFDdkIsNENBQXlCLENBQUE7WUFDekIsMENBQXVCLENBQUE7UUFDM0IsQ0FBQyxFQUxXLGVBQWUsR0FBZixzQkFBZSxLQUFmLHNCQUFlLFFBSzFCO0lBQ0wsQ0FBQyxFQTNCb0IsTUFBTSxHQUFOLFVBQU0sS0FBTixVQUFNLFFBMkIxQjtBQUFELENBQUMsRUEzQmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQTJCbkI7QUFDRCxJQUFpQixjQUFjLENBZ0Q5QjtBQWhERCxXQUFpQixjQUFjO0lBQzNCLElBQVksaUJBSVg7SUFKRCxXQUFZLGlCQUFpQjtRQUN6Qix5Q0FBb0IsQ0FBQTtRQUNwQix1Q0FBa0IsQ0FBQTtRQUNsQiwyQ0FBc0IsQ0FBQTtJQUMxQixDQUFDLEVBSlcsaUJBQWlCLEdBQWpCLGdDQUFpQixLQUFqQixnQ0FBaUIsUUFJNUI7SUFpQ0QsSUFBWSxNQUlYO0lBSkQsV0FBWSxNQUFNO1FBQ2Qsc0NBQTRCLENBQUE7UUFDNUIsa0RBQXdDLENBQUE7UUFDeEMsd0NBQThCLENBQUE7SUFDbEMsQ0FBQyxFQUpXLE1BQU0sR0FBTixxQkFBTSxLQUFOLHFCQUFNLFFBSWpCO0lBQ0QsSUFBWSxlQUlYO0lBSkQsV0FBWSxlQUFlO1FBQ3ZCLGdDQUFhLENBQUE7UUFDYiw0Q0FBeUIsQ0FBQTtRQUN6QixrQ0FBZSxDQUFBO0lBQ25CLENBQUMsRUFKVyxlQUFlLEdBQWYsOEJBQWUsS0FBZiw4QkFBZSxRQUkxQjtBQUNMLENBQUMsRUFoRGdCLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBZ0Q5QjtBQWdCRCxJQUFZLE1BS1g7QUFMRCxXQUFZLE1BQU07SUFDZCx1QkFBYSxDQUFBO0lBQ2IsdUJBQWEsQ0FBQTtJQUNiLDZCQUFtQixDQUFBO0lBQ25CLCtCQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFMVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFLakI7QUFDRCxJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDdkIsZ0NBQWEsQ0FBQTtJQUNiLGdDQUFhLENBQUE7SUFDYixzQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUIifQ==