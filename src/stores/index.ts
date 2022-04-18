import type { DeepReadonly, UnwrapNestedRefs } from "@vue/reactivity";
import { reactive, readonly } from "vue";

export interface DataModel {
  sectionclass: string;
  containerClass: string;
  mainClass: string;
}

export class DataStore {
  constructor() {
    this._init();
    this._state = reactive(this._state);
  }

  private _state!: UnwrapNestedRefs<DataModel>;

  get state(): DeepReadonly<DataModel> {
    return readonly(this._state);
  }

  setSectionClass(classList: string) {
    this._state.sectionclass = classList;
  }
  setContainerClass(classList: string) {
    this._state.containerClass = classList;
  }
  setMainClass(classList: string) {
    this._state.mainClass = classList;
  }
  private _init() {
    this._state = {
      sectionclass: "",
      containerClass: "",
      mainClass: "",
    };
  }
}

const dataStore = new DataStore();

export default function useDataStore(): DataStore {
  return dataStore;
}
