export interface ToDo {
  id: number;
  order?: number;
  group: string;
  done: boolean;
  description: string;
  url: string;
}
