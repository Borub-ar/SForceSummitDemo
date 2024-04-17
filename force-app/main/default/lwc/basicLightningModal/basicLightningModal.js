import LightningModal from 'lightning/modal';

export default class BasicLightningModal extends LightningModal {
    content = 'asdsadasdsadsad';

    handleOkay() {
        this.close('okay');
    }
}