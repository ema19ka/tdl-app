import { Item } from "./Item";

export interface List {
    id: string;
    name: string;
    isDone: boolean;
    items: Item[];
}