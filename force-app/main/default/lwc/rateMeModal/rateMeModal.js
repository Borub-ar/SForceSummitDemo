import { LightningElement } from 'lwc';

export default class RateMeModal extends LightningElement {
  isRendered = false;

  connectedCallback() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    });

    document.body.style.overflow = 'hiddden';
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    });

    document.body.style.overflow = 'auto';
  }

  renderedCallback() {
    if (this.isRendered) return;
    this.isRendered = true;

    this.template.querySelector('.focus-element').focus();
  }

  closeModal() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  handleTabLoop(event) {
    if (event.keyCode === 9 && !event.shiftKey) {
      event.preventDefault();
      this.template.querySelector('.first-element').focus();
    }
  }

  handleTabLoopBackwards(event) {
    if (event.keyCode === 9 && event.shiftKey) {
      event.preventDefault();
      this.template.querySelector('.last-element').focus();
    }
  }
}
