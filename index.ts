import * as t from "io-ts";
import * as types from "io-ts-types";

const myType = t.type({
  date: types.DateFromISOString // this does not compile...
});

const decoded = myType.decode({ date: new Date().toString() });
console.log(decoded);
