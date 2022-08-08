import { List } from "./List";

export interface Category {
    id: string;
    name: string;
    color: string;
    lists: List[];
}