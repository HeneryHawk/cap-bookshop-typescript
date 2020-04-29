using {sap.capire.bookshop as my} from '../db/schema';

service CatalogService {

  @readonly
  entity Book as projection on my.Book {
    * , author.name as author
  } excluding {
    createdBy,
    modifiedBy
  };

  @requires_ : 'authenticated-user'
  action submitOrder(book : Book.ID, amount : Integer);
}
