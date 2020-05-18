import cds from "@sap/cds";
import { Handler, Req, Func, Param } from "cds-routing-handlers";
import { CatalogService } from "../entities";

/**
 * Function handler.
 *
 * @export
 * @class FunctionHandler
 */
@Handler()
export class FunctionHandler {
    /**
     * @memberof FunctionHandler
     */
    @Func(CatalogService.ActionSubmitOrder.name)
    public async submitOrder(
        @Param(CatalogService.ActionSubmitOrder.paramBook) book: CatalogService.IBook,
        @Param(CatalogService.ActionSubmitOrder.paramAmount) amount: number,
        @Req() req: any
    ): Promise<void> {
        const n = await cds
            .update(CatalogService.SanitizedEntity.Book)
            .with({ stock: { "-=": amount } })
            .where({ ID: book.ID, stock: { ">=": amount } });
        n > 0 || req.error(409, `${amount} exceeds stock for book #${book}`);
    }
}
