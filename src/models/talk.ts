import { Tag, Language } from './filters';

export interface Talk {
    id: number;
    title: string;
    author: string;
    language: Language;
    tag: Tag;
}
