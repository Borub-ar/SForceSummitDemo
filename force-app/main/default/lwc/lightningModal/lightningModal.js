import { LightningElement } from 'lwc';
import LightningModal from 'lightning/modal';

export default class LightningModal extends LightningModal {
    content = 'asdsadasdsadsad';

    handleOkay() {
        this.close('okay');
    }
}