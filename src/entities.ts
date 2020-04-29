export enum ActionSubmitOrder {
    name = "submitOrder",
    paramBook = "book",
    paramAmount = "amount",
}

export interface IActionSubmitOrderParams {
    book: unknown;
    amount: number;
}

export interface ICurrencies_texts {
    locale: string;
    name: string;
    descr: string;
    code: string;
}

export interface ICurrencies {
    name?: string;
    descr?: string;
    code: string;
    symbol: string;
    texts: unknown;
    localized?: ICurrencies_texts;
}

export interface IServiceBooks {
    createdAt?: Date;
    modifiedAt?: Date;
    ID: number;
    title?: string;
    descr?: string;
    author: string;
    genre?: IGenre;
    genre_ID?: number;
    stock: number;
    price: number;
    currency: unknown;
    currency_code?: string;
    texts: unknown;
    localized?: IBook_texts;
}

export interface IManaged {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
}

export interface IAuthor extends IManaged {
    ID: number;
    name: string;
    dateOfBirth: Date;
    dateOfDeath: Date;
    placeOfBirth: string;
    placeOfDeath: string;
    books?: IBook[];
}

export interface IBook extends IManaged {
    ID: number;
    title: string;
    descr: string;
    author?: IAuthor;
    author_ID?: number;
    genre?: IGenre;
    genre_ID?: number;
    stock: number;
    price: number;
    currency: unknown;
    texts: unknown;
    localized?: IBook_texts;
}

export interface IBook_texts {
    locale: string;
    ID: number;
    title: string;
    descr: string;
}

export interface IGenre {
    name: string;
    descr: string;
    ID: number;
    parent?: IGenre;
    parent_ID?: number;
    children: unknown;
    texts: unknown;
    localized?: IGenre_texts;
}

export interface IGenre_texts {
    locale: string;
    name: string;
    descr: string;
    ID: number;
}

export interface ITemporal {
    validFrom: Date;
    validTo: Date;
}

export enum Entity {
    Book_texts = "sap.capire.bookshop.Book_texts",
    Currencies = "localized.CatalogService.Currencies",
    Currencies_texts = "CatalogService.Currencies_texts",
    Genre = "sap.capire.bookshop.Genre",
    Genre_texts = "sap.capire.bookshop.Genre_texts",
    ServiceBooks = "localized.CatalogService.ServiceBooks",
    Author = "sap.capire.bookshop.Author",
    Book = "sap.capire.bookshop.Book",
    Managed = "managed",
    Temporal = "temporal",
}

export enum SanitizedEntity {
    Book_texts = "Book_texts",
    Currencies = "Currencies",
    Currencies_texts = "Currencies_texts",
    Genre = "Genre",
    Genre_texts = "Genre_texts",
    ServiceBooks = "ServiceBooks",
    Author = "Author",
    Book = "Book",
    Managed = "Managed",
    Temporal = "Temporal",
}
