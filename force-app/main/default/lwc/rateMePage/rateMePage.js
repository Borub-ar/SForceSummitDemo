import { LightningElement } from 'lwc';
import BACKGROUND from "@salesforce/resourceUrl/Background";
import LOGO from "@salesforce/resourceUrl/Logo";

import basicModal from 'c/basicLightningModal';

export default class RateMePage extends LightningElement {
    background = BACKGROUND;
    craftwareLogo = LOGO

    get backgroundStyle() {
        return `background-image: url(${this.background})`;
    }

    async handleClick() {
        this.result = await basicModal.open({size: 'small',description: 'Description'});
    }   

}