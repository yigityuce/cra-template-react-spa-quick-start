/// <reference types="react-scripts" />

type Maybe<T> = T | null | undefined;
type FieldsAny<T> = { [P in keyof T]: any };
type Extendable<T> = T | { [key: string | number]: any };
