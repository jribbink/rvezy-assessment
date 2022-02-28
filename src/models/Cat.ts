export default class Cat {
  breeds!: any[];
  categories!: { id: number; name: string };
  id!: string;
  url!: string;
  width!: number;
  height!: number;

  constructor(data: Partial<Cat>) {
    Object.assign(this, data);
  }
}
