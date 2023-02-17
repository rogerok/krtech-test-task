import { makeAutoObservable } from "mobx";
import { accountData } from "shared/data";

export class User {
  userData = accountData;

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new User();
