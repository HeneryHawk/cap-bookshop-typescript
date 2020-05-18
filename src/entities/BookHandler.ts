import { Handler, Req, AfterRead, Entities} from "cds-routing-handlers";
import { CatalogService } from "../entities";

/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
@Handler(CatalogService.SanitizedEntity.Book)
export class BookHandler {
    /**
     * @memberof BookHandler
     */
    @AfterRead()
    public async addDiscount(@Entities() book: CatalogService.IBook[], @Req() req: any): Promise<void> {
        console.log("Read Books");

        for (const each of book) {
            if (each.stock > 111) each.title += ` -- 11% discount!`;
        }
    }
}
