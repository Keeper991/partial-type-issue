import { Injectable } from '@nestjs/common';

import { PartialType } from '@nestjs/mapped-types';

class ParentClass {
  name: string;
  age: number;
  job: string;
}
class ChildClass extends PartialType(ParentClass) {}

@Injectable()
export class AppService {
  getHello(): string {
    const childList: ChildClass[] = [];
    childList.push({ name: 'child' });

    return 'Hello World!';
  }
}
