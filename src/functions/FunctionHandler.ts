import { Handler, Req, Func, Param } from "cds-routing-handlers";
import { SanitizedEntity, IBook, ActionSubmitOrder } from "../entities";

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
    @Func(ActionSubmitOrder.name)
    public async submitOrder(
        @Param(ActionSubmitOrder.paramBook) book: IBook,
        @Param(ActionSubmitOrder.paramAmount) amount: number,
        @Req() req: any
    ): Promise<void> {
        const n = await cds
            .update(SanitizedEntity.Book)
            .with({ stock: { "-=": amount } })
            .where({ ID: book.ID, stock: { ">=": amount } });
        n > 0 || req.error(409, `${amount} exceeds stock for book #${book}`);
    }
}
