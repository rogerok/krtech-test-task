import { makeAutoObservable } from "mobx";
import { usersData, UserData } from "shared/data";

export interface IContacts {
  contactsData: UserData[];
  searchResult: UserData[] | [];
  searchTerm: string;
}

export class Contacts {
  contactsData: UserData[] = usersData;

  searchResult: UserData[] | [] = [];

  searchTerm = "";

  constructor() {
    makeAutoObservable(this);
  }

  get totalUnreadedMessages() {
    return this.contactsData.reduce(
      (acc, { unreadedMessagesAmount }) => acc + unreadedMessagesAmount,
      0
    );
  }

  searchUser(searchTerm: string) {
    this.searchTerm = searchTerm.trim().toLowerCase();
  }

  get searchResults() {
    return this.contactsData.filter(
      ({ firstName, lastName }) =>
        firstName.toLowerCase().includes(this.searchTerm) ||
        (lastName && lastName.toLowerCase().includes(this.searchTerm))
    );
  }
}

export const contactsStore = new Contacts();
