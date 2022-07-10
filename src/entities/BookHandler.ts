import { Handler, Req, AfterRead, Entities, BeforeRead } from "cds-routing-handlers";
import { CatalogService } from "../entities";

/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
@Handler(CatalogService.SanitizedEntity.Book)
export class BookHandler {
    // You can also decorate multiple methods with the same docorator (@BeforRead in this example)
    // This way you can structure the code which should be executed on the beforRead hook and break it down into smaller pieces
    @BeforeRead()
    public async checkAuth() {}
    @BeforeRead()
    public async doSomeOtherThings() {}

    // The @Entities decorator imports the read entities
    // The @Req decorator imports the current request object
    // And there are lots of more decorators (@Jwt, @Data, @User, @Locale, @Param ...)
    @AfterRead()
    public async addDiscount(@Entities() book: CatalogService.IBook[], @Req() req: any): Promise<void> {
        console.log("Read Books");

        const addDiscount = (book) => {
            if (book.stock > 111) book.title += ` -- 11% discount!`;
            return book
        }

        const isIterable = (obj) => {
            // checks for null and undefined
            if (obj == null) {
                return false;
            }
            return typeof obj[Symbol.iterator] === 'function';
        }

        if (isIterable(book)) {
            for (const each of book) {
                addDiscount(each);
            }
        } else {
            addDiscount(book);
        }
    }
}
