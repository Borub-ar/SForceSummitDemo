import { LightningElement } from 'lwc';
import BACKGROUND from '@salesforce/resourceUrl/Background';
import LOGO from '@salesforce/resourceUrl/Logo';

export default class RateMePage extends LightningElement {
  showModal = false;

  background = BACKGROUND;
  craftwareLogo = LOGO;

  get backgroundStyle() {
    return `background-image: url(${this.background})`;
  }

  handleModalVisibility() {
    this.showModal = !this.showModal;
  }
}
