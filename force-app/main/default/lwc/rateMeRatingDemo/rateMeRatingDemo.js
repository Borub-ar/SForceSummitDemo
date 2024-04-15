import {track, LightningElement} from 'lwc';

export default class RateMeRatingDemo extends LightningElement {

    static delegatesFocus = true;

    columns = 5;

    @track
    options = [
        {
            value: "1",
            label: "Nie wytrzymałem do końca ;)"
        },
        {
            value: "2",
            label: "Nic nowego się nie dowiedziałem"
        },
        {
            value: "3",
            label: "Było OK"
        },
        {
            value: "4",
            label: "Spoko, dużo ciekawych informacji"
        },
        {
            value: "5",
            label: "WOW, nie wiedziałem, że w LWC tak się da"
        }
    ]

    handleValueChange(event) {
        const value = event.target.value;
        this.options.forEach(option => {
            option.checked = option.value === value && event.target.checked === true;
        });
    }

}