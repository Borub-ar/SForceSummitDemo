import { LightningElement } from 'lwc';
import BACKGROUND from "@salesforce/resourceUrl/Background";
import LOGO from "@salesforce/resourceUrl/Logo";

export default class RateMePage extends LightningElement {
    background = BACKGROUND;
    craftwareLogo = LOGO

    showModal = false;

    get backgroundStyle() {
        return `background-image: url(${this.background})`;
    }



    

    handleModalVisibility() {
        console.log('aaaaaa');
        this.showModal = !this.showModal;
    }
}