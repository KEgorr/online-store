import { app } from '../..';
import { ICardData, IOrderData, IStorageData } from '../types/dataTypes';
import { getTotalCost } from './utils/costUtils';

export default class ByNowPopUp {
  private data: IOrderData;

  private card: ICardData;

  constructor() {
    this.data = {
      name: '',
      surname: '',
      country: '',
      city: '',
      state: '',
      address: '',
      post: '',
    };

    this.card = {
      cardNumber: '',
      cardCvv: '',
      cardDate: '',
    };
  }

  public drawPopUp(event: Event) {
    const target = event.target;

    if (target instanceof Element) {
      if (!target.closest('.by-now-button')) {
        return;
      }
    }
    const fragment = document.createDocumentFragment();

    const popUpTemp: HTMLTemplateElement | null = document.querySelector('#buyNowPopUp');

    if (popUpTemp) {
      const popUpClone = popUpTemp.content.cloneNode(true);

      if (popUpClone instanceof DocumentFragment) {
        const popUpPriceText: HTMLSpanElement | null = popUpClone.querySelector('.order-amount');

        const dataPopUpInputs = popUpClone.querySelectorAll('.data-popUp-input');

        dataPopUpInputs.forEach((input) => {
          if (input instanceof HTMLInputElement) {
            const inputId = input.id;

            input.value = this.data[inputId];
          }
        });

        let items: IStorageData[] = [];
        const localData = app.localStorage.get('items');

        if (localData) {
          items = JSON.parse(localData) as IStorageData[];
        }

        if (popUpPriceText) {
          const { discountCost } = getTotalCost(items);
          popUpPriceText.textContent = `${discountCost}$`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }
      }

      fragment.appendChild(popUpClone);

      const body = document.querySelector('.body');

      if (body) {
        body.appendChild(fragment);
      }
    }
  }

  public closePopUp(event: Event) {
    const target = event.target;

    if (target instanceof Element) {
      const popUp = target.closest('.buy-now-pop-up-block');

      if (!popUp) return;

      if (target.closest('.buy-now-block')) return;

      popUp.remove();
    }
  }

  public setData(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement && target.closest('.data-popUp-input')) {
      const inputId = target.id;

      if (typeof this.data[inputId] !== 'undefined') {
        target.classList.remove('invalid-input');
        this.data[inputId] = target.value;
      }
    }
  }

  public setCardNumber(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement && target.closest('.card-number')) {
      target.classList.remove('invalid-input');
      let cardNumber = target.value.replace(/[^\d]/g, '').substring(0, 20);
      if (cardNumber !== '') {
        this.card.cardNumber = cardNumber;
        const formattedArr = cardNumber.match(/.{1,4}/g);
        if (formattedArr) {
          cardNumber = formattedArr.join(' ');
          target.value = cardNumber;
        }
      } else {
        target.value = '';
      }
    }
  }

  public setCardDate(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement && target.closest('.card-valid-thru')) {
      target.classList.remove('invalid-input');
      let cardDate = target.value.replace(/[^\d]/g, '').substring(0, 4);
      if (cardDate !== '') {
        const formattedArr = cardDate.match(/.{1,2}/g);
        if (formattedArr) {
          cardDate = formattedArr.join('/');
          this.card.cardDate = cardDate;
          target.value = cardDate;
        }
      } else {
        target.value = '';
      }
    }
  }

  public setCVV(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement && target.closest('.card-cvv')) {
      target.classList.remove('invalid-input');
      const cardCVV = target.value.replace(/[^\d]/g, '').substring(0, 3);
      if (cardCVV !== '') {
        target.value = cardCVV;
        this.card.cardCvv = cardCVV;
      } else {
        target.value = '';
      }
    }
  }

  private validateInputs() {
    const invalidIdsArr: string[] = [];

    Object.entries(this.data).forEach((dataEl) => {
      const elKey = dataEl[0];
      const elVal = dataEl[1];

      if (!elVal.trim()) {
        invalidIdsArr.push(elKey);
      }
    });
    return invalidIdsArr;
  }

  public confirmOrder(event: Event) {
    const target = event.target;

    if (target instanceof Element && !target.closest('.confirm-order-button')) {
      return;
    }
    let isAllValid = true;
    const hiddenTextData = document.querySelector('.data-text');
    if (hiddenTextData) {
      hiddenTextData.classList.remove('showed-pop-up-text');

      const invalidIds = this.validateInputs();

      if (invalidIds.length !== 0) {
        isAllValid = false;
        invalidIds.forEach((id) => {
          const invalidInput: HTMLInputElement | null = document.querySelector(`#${id}`);
          if (invalidInput) {
            invalidInput.classList.add('invalid-input');
          }
        });

        hiddenTextData.textContent = `Please correctly fill out the next fields: ${invalidIds.join(', ')}`;
        hiddenTextData.classList.add('showed-pop-up-text');
      }
    }

    const hiddenTextCard = document.querySelector('.card-text');
    const inputCardNumber = document.querySelector('.card-number');
    const inputCardDate = document.querySelector('.card-valid-thru');
    const inputCardCvv = document.querySelector('.card-cvv');

    if (inputCardNumber && inputCardDate && inputCardCvv && hiddenTextCard) {
      hiddenTextCard.classList.remove('showed-pop-up-text');
      if (!this.checkCardDate()) {
        isAllValid = false;
        inputCardDate.classList.add('invalid-input');
        hiddenTextCard.classList.add('showed-pop-up-text');
      }
      if (this.card.cardNumber.length < 16) {
        isAllValid = false;
        inputCardNumber.classList.add('invalid-input');
        hiddenTextCard.classList.add('showed-pop-up-text');
      }
      if (this.card.cardCvv.length < 3) {
        isAllValid = false;
        inputCardCvv.classList.add('invalid-input');
        hiddenTextCard.classList.add('showed-pop-up-text');
      }
    }

    if (isAllValid) {
      this.onOrderSuccess();
    }
  }

  private onOrderSuccess() {
    const popUp = document.querySelector('.buy-now-pop-up-block');

    if (popUp) {
      popUp.remove();
    }
    const successBlock = document.createElement('div');
    successBlock.classList.add('order-success-block');

    const successText = document.createElement('p');
    successText.classList.add('order-success-text');

    successBlock.appendChild(successText);

    let items: IStorageData[] = [];
    const localData = app.localStorage.get('items');

    if (localData) {
      items = JSON.parse(localData) as IStorageData[];
    }
    const { discountCost } = getTotalCost(items);

    if (discountCost) {
      successText.textContent = `The ${discountCost}$ order has been successfully placed!`;
    }

    const body = document.querySelector('.body');

    if (body) {
      body.appendChild(successBlock);
    }

    successText.addEventListener('animationend', () => {
      app.localStorage.clearAll();
      app.pageRouter.navigateTo('cart');
      location.reload();
    });
  }

  private checkCardDate() {
    const dateNow = new Date();

    const cardDate = new Date(
      `${this.card.cardDate
        .split('/')
        .map((val, i) => (i === 1 ? `20${val}` : val))
        .reverse()
        .join('-')}`
    );

    return dateNow < cardDate;
  }
}
