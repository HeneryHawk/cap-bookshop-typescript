using { Currency, managed, sap } from '@sap/cds/common';
namespace sap.capire.bookshop;

entity Book : managed {
  key ID : Integer;
  title  : localized String(111);
  descr  : localized String(1111);
  author : Association to Author;
  genre  : Association to Genre;
  stock  : Integer;
  price  : Decimal(9,2);
  currency : Currency;
}

entity Author : managed {
  key ID : Integer;
  name   : String(111);
  dateOfBirth  : Date;
  dateOfDeath  : Date;
  placeOfBirth : String;
  placeOfDeath : String;
  books  : Association to many Book on books.author = $self;
}

/** Hierarchically organized Code List for Genres */
entity Genre : sap.common.CodeList {
  key ID   : Integer;
  parent   : Association to Genre;
  children : Composition of many Genre on children.parent = $self;
}
