import dmitriy from "../assets/images/dmitriy.jpg";
import anastasiya from "../assets/images/anastasiya.jpg";
import dialog from "../assets/images/dialog.svg";
import anna from "../assets/images/anna.jpg";
import alina from "../assets/images/alina.jpg";
import vova from "../assets/images/vova.jpg";
import igor from "../assets/images/igor.jpg";

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
export const usersData: UserData[] = [
  {
    id: 1,
    firstName: "Дмитрий",
    lastName: "Анатольевич",
    message: "Документы будут готовы к вторнику",
    isOnline: true,
    isTyping: true,
    thumbnail: dmitriy,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 1000,
  },
  {
    id: 2,
    firstName: "Анастасия",
    lastName: "Александровна",
    message: "Документы будут готовы к вторнику",
    isOnline: true,
    isTyping: true,
    thumbnail: anastasiya,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 3,
    firstName: "Диалог",
    lastName: "М",
    message: "Доступна новая веб версия продукта",
    isOnline: true,
    isTyping: true,
    thumbnail: dialog,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 4,
    firstName: "Андрей",
    lastName: "В",
    message: "Добрый день!",
    isOnline: true,
    isTyping: true,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 5,
    firstName: "Андрей",
    lastName: "В",
    message: "Добрый день!",
    isOnline: true,
    isTyping: true,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 6,
    firstName: "Анна",
    message: "Документы будут готовы к вторнику",
    isOnline: true,
    isTyping: true,
    thumbnail: anna,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 7,
    firstName: "Игорь",
    lastName: "Хоменко",
    message: "Меня нет на работе. больничный",
    isOnline: true,
    isTyping: true,
    thumbnail: igor,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 8,
    firstName: "Алина",
    lastName: "Викторовна",
    message: "И слова, получив текст широко раскрыв",
    isOnline: true,
    isTyping: true,
    thumbnail: alina,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 9,
    firstName: "Алина",
    lastName: "Викторовна",
    message: "И слова, получив текст широко раскрыв",
    isOnline: true,
    isTyping: true,
    thumbnail: alina,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 10,
    firstName: "Вова",
    message: "Создающие собственные",
    isOnline: true,
    isTyping: true,
    thumbnail: vova,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
  {
    id: 11,
    firstName: "Вова",
    lastName: "Курочкин",
    message: "Создающие собственные",
    isOnline: true,
    isTyping: false,
    lastMessageDate: "February 13 2023 21:04",
    unreadedMessagesAmount: 999,
  },
];
