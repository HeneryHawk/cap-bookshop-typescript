export namespace cap.bookshop.typescript {
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
        currency: sap.common.ICurrencies;
        currency_code?: string;
    }

    export interface IGenre extends sap.common.ICodeList {
        ID: number;
        parent?: IGenre;
        parent_ID?: number;
        children: IGenre[];
    }

    export enum Entity {
        Author = "cap.bookshop.typescript.Author",
        Book = "cap.bookshop.typescript.Book",
        Genre = "cap.bookshop.typescript.Genre",
    }

    export enum SanitizedEntity {
        Author = "Author",
        Book = "Book",
        Genre = "Genre",
    }
}

export namespace sap.common {
    export interface ICodeList {
        name: string;
        descr: string;
    }

    export interface ICountries extends sap.common.ICodeList {
        code: string;
    }

    export interface ICurrencies extends sap.common.ICodeList {
        code: string;
        symbol: string;
    }

    export interface ILanguages extends sap.common.ICodeList {
        code: string;
    }

    export enum Entity {
        CodeList = "sap.common.CodeList",
        Countries = "sap.common.Countries",
        Currencies = "sap.common.Currencies",
        Languages = "sap.common.Languages",
    }

    export enum SanitizedEntity {
        CodeList = "CodeList",
        Countries = "Countries",
        Currencies = "Currencies",
        Languages = "Languages",
    }
}

export namespace CatalogService {
    export interface IBook {
        createdAt?: Date;
        modifiedAt?: Date;
        ID: number;
        title: string;
        descr: string;
        author: string;
        genre?: IGenre;
        genre_ID?: number;
        stock: number;
        price: number;
        currency: ICurrencies;
        currency_code?: string;
    }

    export interface ICurrencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
    }

    export interface IGenre {
        name: string;
        descr: string;
        ID: number;
        parent?: IGenre;
        parent_ID?: number;
        children: IGenre[];
    }

    export enum ActionSubmitOrder {
        name = "submitOrder",
        paramBook = "book",
        paramAmount = "amount",
    }

    export interface IActionSubmitOrderParams {
        book: number;
        amount: number;
    }

    export enum Entity {
        Book = "CatalogService.Book",
        Currencies = "CatalogService.Currencies",
        Genre = "CatalogService.Genre",
    }

    export enum SanitizedEntity {
        Book = "Book",
        Currencies = "Currencies",
        Genre = "Genre",
    }
}

export type User = string;

export interface ICuid {
    ID: string;
}

export interface IManaged {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
}

export interface ITemporal {
    validFrom: Date;
    validTo: Date;
}

export enum Entity {
    Cuid = "cuid",
    Managed = "managed",
    Temporal = "temporal",
}

export enum SanitizedEntity {
    Cuid = "Cuid",
    Managed = "Managed",
    Temporal = "Temporal",
}
