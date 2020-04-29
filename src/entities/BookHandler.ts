import { Handler, Req, AfterRead, BeforeCreate, BeforeUpdate, Entities, Jwt, Data, Locale } from "cds-routing-handlers";
import { SanitizedEntity, IBook } from "./../entities";

/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
@Handler(SanitizedEntity.Book)
export class BookHandler {
    /**
     * @memberof BookHandler
     */
    @AfterRead()
    public async addDiscount(@Entities() book: IBook[], @Jwt() jwt: string): Promise<void> {
        for (const each of book) {
            if (each.stock > 111) each.title += ` -- 11% discount!`;
        }
    }
}
