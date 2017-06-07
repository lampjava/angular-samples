import { ObjectUtils } from '../../../utils';

export class UserAdditional {

  birthday: string;
  age: number;
  address: string;

  constructor(values: {
    birthday?: string,
    age?: number,
    address?: string
  } = {}) {
    this.birthday = values.birthday || null;
    this.age = values.age || null;
    this.address = values.address || null;
  }

  public toString(): string {
    return ObjectUtils.objectToJson(this);
  }

}
