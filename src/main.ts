import { Second } from "./second";
import { InterfaceTwo } from './interfaces';
import * as _ from 'lodash';

class App implements InterfaceTwo{
  title = 'Some Title';

  constructor(){
    console.log('App is running!');
  }

  getNames(){
    return [{ name: this.title }];
  }
}

const app = new App();
new Second();
console.log(app.getNames()[0].name);

console.log(_.isArray(new App().getNames()));
