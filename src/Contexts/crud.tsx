import { useState, createContext } from "react";
// TODO: type out the crud operations
export let CrudContext = createContext<any>({ crudStatus: null, setCrudStatus: null}); // these should match what you put in Component.Provider value
