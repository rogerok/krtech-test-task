import dmitriy from "../assets/images/dmitriy.jpg";
import anastasiya from "../assets/images/anastasiya.jpg";
import dialog from "../assets/images/dialog.svg";
import anna from "../assets/images/anna.jpg";
import alina from "../assets/images/alina.jpg";
import vova from "../assets/images/vova.jpg";
import igor from "../assets/images/igor.jpg";
import accountAvatar from "../assets/images/avatar.jpg";

export interface UserData {
  id: number;
  firstName: string;
  lastName?: string;
  message: string;
  isOnline: boolean;
  isTyping: boolean;
  thumbnail?: string;
  lastMessageDate: string;
  unreadedMessagesAmount: number;
}

export const accountData: Pick<
  UserData,
  "firstName" | "lastName" | "unreadedMessagesAmount" | "isOnline" | "thumbnail"
> = {
  firstName: "Иван",
  lastName: "Иванов",
  unreadedMessagesAmount: 12,
  isOnline: true,
  thumbnail: accountAvatar,
};

export const usersData: Record<string, UserData> = {
  1: {
    id: 1,
    firstName: "Дмитрий",
    lastName: "Анатольевич",
    message: "Документы будут готовы к вторнику",
    isOnline: false,
    isTyping: false,
    thumbnail: dmitriy,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  2: {
    id: 2,
    firstName: "Анастасия",
    lastName: "Александровна",
    message: "Документы будут готовы к вторнику",
    isOnline: false,
    isTyping: false,
    thumbnail: anastasiya,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  3: {
    id: 3,
    firstName: "Диалог",
    lastName: "М",
    message: "Доступна новая веб версия продукта",
    isOnline: false,
    isTyping: false,
    thumbnail: dialog,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  4: {
    id: 4,
    firstName: "Андрей",
    lastName: "В",
    message: "Добрый день!",
    isOnline: false,
    isTyping: false,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  5: {
    id: 5,
    firstName: "Андрей",
    lastName: "В",
    message: "Добрый день!",
    isOnline: false,
    isTyping: false,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  6: {
    id: 6,
    firstName: "Анна",
    message: "Документы будут готовы к вторнику",
    isOnline: false,
    isTyping: false,
    thumbnail: anna,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  7: {
    id: 7,
    firstName: "Игорь",
    lastName: "Хоменко",
    message: "Меня нет на работе. больничный",
    isOnline: false,
    isTyping: false,
    thumbnail: igor,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  8: {
    id: 8,
    firstName: "Алина",
    lastName: "Викторовна",
    message: "И слова, получив текст широко раскрыв",
    isOnline: false,
    isTyping: false,
    thumbnail: alina,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  9: {
    id: 9,
    firstName: "Алина",
    lastName: "Викторовна",
    message: "И слова, получив текст широко раскрыв",
    isOnline: false,
    isTyping: false,
    thumbnail: alina,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  10: {
    id: 10,
    firstName: "Вова",
    message: "Создающие собственные",
    isOnline: false,
    isTyping: false,
    thumbnail: vova,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
  11: {
    id: 11,
    firstName: "Вова",
    lastName: "Курочкин",
    message: "Создающие собственные",
    isOnline: false,
    isTyping: false,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 0,
  },
};
