import { ObjectUtils } from '../../../utils';
import { UserAdditional } from './user.additional';

export class User {

  id: number;
  password: string;
  email: string;
  name: string;
  tel: string;
  additional?: object;

  constructor(values: {
    id?: number,
    password?: string,
    email?: string,
    name?: string,
    tel?: string,
    additional?: object
  } = {}) {
    this.id = values.id || null;
    this.password = values.password || null;
    this.email = values.email || null;
    this.name = values.name || null;
    this.tel = values.tel || null;
    this.additional = new UserAdditional(values.additional) || null;
  }

  public toString(): string {
    return ObjectUtils.objectToJson(this);
  }

}
