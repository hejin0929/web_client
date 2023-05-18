import { createContext } from "react";

export const store = new (class Stores {})();

export default createContext(store);
