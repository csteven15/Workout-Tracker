import { create } from "mobx-persist";
import { createContext } from "react";
import { GlobalStore } from "./GlobalStore";

const hydrate = create({
  jsonify: true
});

export class RootStore {
  globalStore = new GlobalStore(this);

  constructor() {
    hydrate("global", this.globalStore);
  }
}

export const RootStoreContext = createContext(new RootStore());