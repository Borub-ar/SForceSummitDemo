import LightningModal from 'lightning/modal';

export default class BasicLightningModal extends LightningModal {
    content = 'asdsadasdsadsad';

    handleOkay() {
        this.close('okay');
    }

    async handleOpen() {
        const result = await MyModal.open({
            // `label` is not included here in this example.
            // it is set on lightning-modal-header instead
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            content: 'Passed into content api',
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }
}