import { useRouter } from "expo-router";
import { APPNAME, VERSION } from "./constants";
import SumSubApi from "./lib/sumsub";
import { Redux } from "./redux/class";

export class ShikaWallet {
  public version: string;
  public name: string;

  constructor() {
    this.version = VERSION;
    this.name = APPNAME;
  }

  useRouter() {
    return useRouter();
  }
  useRedux() {
    return new Redux();
  }

  useSelect() {
    const redux = new Redux();
    return redux.select();
  }

  sumsubApi(userId: string, lang: string) {
    return new SumSubApi(userId, lang);
  }
}

export const shika = new ShikaWallet();
