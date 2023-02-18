import { makeAutoObservable, observable } from "mobx";
import { usersData, UserData } from "shared/data";
import { formatFullDate } from "shared/lib/formatDate";

export class Contacts {
  contactsData: Record<string, UserData> = usersData;

  searchResult: UserData[] | [] = [];

  searchTerm = "";

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  get totalUnreadedMessages() {
    return Object.values(this.contactsData).reduce(
      (acc, { unreadedMessagesAmount }) => acc + unreadedMessagesAmount,
      0
    );
  }

  setUserOnline = (userId: number, isOnline: boolean) => {
    this.contactsData[userId].isOnline = isOnline;
  };

  increaseMessagesAmount = (userId: number | string) => {
    this.contactsData[userId].unreadedMessagesAmount += 1;
  };

  setUserTyping = (userId: number | string, isTyping: boolean) => {
    this.contactsData[userId].isTyping = isTyping;
  };

  searchUser = (searchTerm: string) => {
    this.searchTerm = searchTerm.trim().toLowerCase();
  };

  clearUnreadedMessages = (id: number) => {
    this.contactsData[id].unreadedMessagesAmount = 0;
  };

  updateLastMessageDate = (date: Date, id: number) => {
    const d = formatFullDate(date);
    this.contactsData[id].lastMessageDate = d;
  };

  get searchResults() {
    return Object.values(this.contactsData)
      .filter(
        ({ firstName, lastName }) =>
          firstName.toLowerCase().includes(this.searchTerm) ||
          (lastName && lastName.toLowerCase().includes(this.searchTerm))
      )
      .sort(
        (a, b) =>
          new Date(b.lastMessageDate).getTime() -
          new Date(a.lastMessageDate).getTime()
      );
  }

  get sortedContacts() {
    return Object.values(this.contactsData).sort(
      (a, b) =>
        new Date(b.lastMessageDate).getTime() -
        new Date(a.lastMessageDate).getTime()
    );
  }
}

export const contactsStore = new Contacts();
