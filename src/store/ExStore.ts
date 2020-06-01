import { observable, action } from 'mobx';

export default class ExStore {
  @observable yourStore = 'Hello';

  @action changeToggle = (): void => {
    this.yourStore = this.yourStore === 'Hello' ? 'World' : 'Hello';
  };
}
