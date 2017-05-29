import { ObjectUtils } from '../../../utils';

export class User {

  id: number;
  password: string;
  email: string;
  name: string;
  tel: string;

  constructor(values: {
    id?: number,
    password?: string,
    email?: string,
    name?: string,
    tel?: string
  } = {}) {
    this.id = values.id || null;
    this.password = values.password || null;
    this.email = values.email || null;
    this.name = values.name || null;
    this.tel = values.tel || null;
  }

  public toString(): string {
    return ObjectUtils.objectToJson(this);
  }

}
