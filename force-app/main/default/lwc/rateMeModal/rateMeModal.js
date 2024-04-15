import { LightningElement } from 'lwc';

export default class RateMeModal extends LightningElement {
    isRendered = false;

    connectedCallback() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
            this.closeModal();
            }
        });

        document.body.style.overflow = 'hidden';
    }

    renderedCallback() {
        if (this.isRendered) return;
        this.isRendered = true;

        this.template.querySelector('.first-element').focus();
    }

    disconnectedCallback() {
        document.removeEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
            this.closeModal();
            }
        });

        document.body.style.overflow = 'auto';
    }

    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }

    handleTabNavigation(event) {
        if (event.keyCode === 9 && !event.shiftKey) {
            event.preventDefault();
            this.template.querySelector('.modal_close').focus();
        }
    }

    handleTabNaviagtionBack(event)  {
        if (event.keyCode === 9 && event.shiftKey) {
            event.preventDefault();
            this.template.querySelector('.last-element').focus();
        }
    }
}