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
  lastMessageDate: string | number;
  unreadedMessagesAmount: number;
  dialog: {
    userId: number;
    text: string;
    date: string;
  }[];
}

export const accountData: Pick<
  UserData,
  | "firstName"
  | "lastName"
  | "unreadedMessagesAmount"
  | "isOnline"
  | "thumbnail"
  | "id"
> = {
  id: 0,
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
    dialog: [
      {
        userId: 1,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 1,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 1,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 1,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 1,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 1,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 2,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 2,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 2,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 2,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 2,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 2,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 3,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 3,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 3,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 3,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 3,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 3,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 4,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 4,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 4,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 4,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 4,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 4,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 5,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 5,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 5,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 5,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 5,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 5,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 6,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 6,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 6,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 6,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 6,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 6,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 7,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 7,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 1,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 1,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 1,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 1,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 8,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 8,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 8,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 8,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 8,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 8,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 9,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 9,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 9,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 9,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 9,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 9,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 10,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 10,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 10,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 10,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 10,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 10,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
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
    dialog: [
      {
        userId: 11,
        text: "Хорошо, отправил",
        date: "February 13 2023 08:27",
      },
      {
        userId: 0,
        text: "Благодарю",
        date: "February 13 2023 14:47",
      },
      {
        userId: 11,
        text: "Привет, как дела?",
        date: "February 13 2023 14:45",
      },
      {
        userId: 11,
        text: "Отправь пожалуйста документ с резолюцией",
        date: "February 13 2023 14:45",
      },
      {
        userId: 0,
        text: "Привет",
        date: "February 13 2023 14:45",
      },
      {
        userId: 11,
        text: "Спасибо, получила",
        date: "February 13 2023 15:35",
      },
      {
        userId: 11,
        text: "Доброе утро!",
        date: "February 14 2023 08:27",
      },
      {
        userId: 0,
        text: "Доброе утро!",
        date: "February 14 2023 09:30",
      },
      {
        userId: 11,
        text: `Каждый веб-разработчик знает, что такое текст-«рыба». 
               Текст этот, несмотря на название, не имеет никакого 
               отношения к обитателям водоемов. Используется он 
               веб-дизайнерами для вставки на интернет-страницы`,
        date: "February 14 2023 09:50",
      },
    ],
  },
};
