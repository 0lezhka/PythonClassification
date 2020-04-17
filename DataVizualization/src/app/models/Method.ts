import {Argument} from './Argument';

export class Method{
  constructor(
    public name: string,
    public argumentsOfMethod: Argument[] = [],
  ) {
  }
}
