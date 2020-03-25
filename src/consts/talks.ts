import { Talk } from '../models/talk';
import { Language, Tag } from '../models/filters';

export const talksStub: Array<Talk> = [
    { id: 1, title: 'Интересный доклад', author: 'Я', tag: Tag.hot, language: Language.ru },
    { id: 2, title: 'Неинтересный доклад', author: 'Не я', tag: Tag.academic, language: Language.ru },
    { id: 3, title: 'Ещё какой-то доклад', author: 'Ещё кто-то', tag: Tag.advanced, language: Language.ru },
    { id: 4, title: 'Yet another talk', author: 'Speaker', tag: Tag.intermediate, language: Language.en }
];
