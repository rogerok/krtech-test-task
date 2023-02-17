import { makeAutoObservable, observable } from "mobx";
import { usersData, UserData } from "shared/data";

export class Contacts {
  contactsData: Record<string, UserData> = usersData;

  searchResult: UserData[] | [] = [];

  searchTerm = "";

  constructor() {
    makeAutoObservable(this, { contactsData: observable });
  }

  get totalUnreadedMessages() {
    return Object.values(this.contactsData).reduce(
      (acc, { unreadedMessagesAmount }) => acc + unreadedMessagesAmount,
      0
    );
  }

  setUserOnline(userId: number, isOnline: boolean) {
    this.contactsData[userId].isOnline = isOnline;
  }

  increaseMessagesAmount(userId: number | string) {
    this.contactsData[userId].unreadedMessagesAmount += 1;
  }

  setUserTyping(userId: number | string, isTyping: boolean) {
    this.contactsData[userId].isTyping = isTyping;
    console.log(this.contactsData[userId].isTyping, userId);
  }

  searchUser(searchTerm: string) {
    this.searchTerm = searchTerm.trim().toLowerCase();
  }

  get searchResults() {
    return Object.values(this.contactsData).filter(
      ({ firstName, lastName }) =>
        firstName.toLowerCase().includes(this.searchTerm) ||
        (lastName && lastName.toLowerCase().includes(this.searchTerm))
    );
  }
}

export const contactsStore = new Contacts();
