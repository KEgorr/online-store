/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/images/american-express-logo.png");

/***/ }),

/***/ 367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/images/master-card-logo.png");

/***/ }),

/***/ 771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/images/union-logo.png");

/***/ }),

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/images/visa-logo.png");

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.app = void 0;
__webpack_require__(75);
var app_1 = __webpack_require__(635);
exports.app = new app_1["default"]();
exports.app.start();


/***/ }),

/***/ 635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.App = void 0;
var data = __webpack_require__(103);
var localStorage_1 = __webpack_require__(166);
var vanillaRouter_1 = __webpack_require__(560);
var buyNowPopUp_1 = __webpack_require__(674);
var cart_1 = __webpack_require__(738);
var cost_1 = __webpack_require__(436);
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.pageRouter = new vanillaRouter_1.PageRouter({
            mode: 'history',
            page404: function () { return _this.error404(); }
        });
        this.localStorage = new localStorage_1["default"]();
        this.costChanging = new cost_1.Cost();
        this.cart = new cart_1.Cart();
        this.popUp = new buyNowPopUp_1["default"]();
        this.promos = {
            RS: false,
            EPM: false,
            invalidPromo: false
        };
        this.cartPageNumber = 1;
        this.limitCartPage = 3;
    }
    App.prototype.start = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        this.pageRouter.routerSetup(data.products);
        this.pageRouter.setupPageHooks();
        this.pageRouter.addUriListener();
        this.pageRouter.addDOMContentLoadedListener();
        (_a = document.querySelector('.logo')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return _this.pageRouter.navigateTo('/'); });
        var localData = this.localStorage.get('items');
        var localItems = [];
        if (localData) {
            localItems = JSON.parse(localData);
        }
        this.localStorage.set('cartPageNumber', '1');
        this.costChanging.updateItemsInCart(localItems);
        (_b = document.querySelector('.body')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) { return _this.costChanging.addItemToCart(event); });
        (_c = document.querySelector('.body')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (event) { return _this.costChanging.removeItemFromCart(event); });
        (_d = document.querySelector('.body')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', function (event) { return _this.cart.changeLimitInCart(event); });
        (_e = document.querySelector('.body')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function (event) { return _this.cart.cartPageIncrease(event); });
        (_f = document.querySelector('.body')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function (event) { return _this.cart.cartPageDecrease(event); });
        (_g = document.querySelector('.body')) === null || _g === void 0 ? void 0 : _g.addEventListener('keydown', function (event) { return _this.cart.enterPromoCode(event); });
        (_h = document.querySelector('.body')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function (event) { return _this.cart.removePromoCode(event); });
        (_j = document.querySelector('.body')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function (event) { return _this.popUp.drawPopUp(event); });
        (_k = document.querySelector('.body')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', function (event) { return _this.popUp.closePopUp(event); });
        (_l = document.querySelector('.body')) === null || _l === void 0 ? void 0 : _l.addEventListener('input', function (event) { return _this.popUp.setData(event); });
        (_m = document.querySelector('.body')) === null || _m === void 0 ? void 0 : _m.addEventListener('input', function (event) { return _this.popUp.setCardNumber(event); });
        (_o = document.querySelector('.body')) === null || _o === void 0 ? void 0 : _o.addEventListener('input', function (event) { return _this.popUp.setCardDate(event); });
        (_p = document.querySelector('.body')) === null || _p === void 0 ? void 0 : _p.addEventListener('input', function (event) { return _this.popUp.setCVV(event); });
        (_q = document.querySelector('.body')) === null || _q === void 0 ? void 0 : _q.addEventListener('click', function (event) { return _this.popUp.confirmOrder(event); });
    };
    App.prototype.error404 = function () {
        var errorText = document.createElement('p');
        errorText.classList.add('error-text');
        errorText.textContent = 'ERROR 404 (PAGE NOT FOUND)';
        var main = document.querySelector('.main .wrapper');
        if (main) {
            main.appendChild(errorText);
        }
    };
    return App;
}());
exports.App = App;
exports["default"] = App;


/***/ }),

/***/ 166:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var LocalStorage = /** @class */ (function () {
    function LocalStorage(getStorage) {
        if (getStorage === void 0) { getStorage = function () { return window.localStorage; }; }
        this.storage = getStorage();
    }
    LocalStorage.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    LocalStorage.prototype.get = function (key) {
        return this.storage.getItem(key);
    };
    LocalStorage.prototype.getAll = function () {
        var data = __assign({}, localStorage);
        return data;
    };
    LocalStorage.prototype.clear = function (key) {
        this.storage.removeItem(key);
    };
    LocalStorage.prototype.clearAll = function () {
        localStorage.clear();
    };
    return LocalStorage;
}());
exports["default"] = LocalStorage;


/***/ }),

/***/ 438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.AddQueryParams = void 0;
var localStorage_1 = __webpack_require__(166);
var AddQueryParams = /** @class */ (function () {
    function AddQueryParams() {
        this.paramsQuery = {};
    }
    AddQueryParams.prototype.createQueryParams = function (params) {
        return Object.keys(params)
            .map(function (key) { return params[key].map(function (val) { return encodeURI(val); }).join('↕'); })
            .join('');
    };
    AddQueryParams.prototype.createQueryParamsKey = function (params) {
        return Object.keys(params)
            .map(function (key) { return "".concat(key); })
            .join('&');
    };
    AddQueryParams.prototype.setAttribute = function (name, val) {
        var url = new URL(window.location);
        url.searchParams.set(name, val);
        if (url.searchParams.get(name) === '') {
            url.searchParams["delete"](name);
        }
        history.pushState('', '', url.toString());
    };
    AddQueryParams.prototype.add = function () {
        var _this = this;
        var localStorage = new localStorage_1["default"]();
        var paramsBrandValue = [];
        var paramsCategoryValue = [];
        var checkboxes = document.querySelectorAll('.checkbox');
        var search = document.querySelector('.search');
        if (checkboxes) {
            checkboxes.forEach(function (checkbox) {
                checkbox.addEventListener('input', function (event) {
                    var _a, _b;
                    var params = new URLSearchParams(window.location.search);
                    var paramsCurBrand = (_a = params.get('brand')) === null || _a === void 0 ? void 0 : _a.split('↕');
                    var paramsCurCategory = (_b = params.get('category')) === null || _b === void 0 ? void 0 : _b.split('↕');
                    if (paramsCurBrand) {
                        paramsBrandValue = paramsCurBrand.map(function (val) { return decodeURI(val); });
                    }
                    if (paramsCurCategory) {
                        paramsCategoryValue = paramsCurCategory.map(function (val) { return decodeURI(val); });
                    }
                    var targetCheckbox = event.currentTarget;
                    var paramsQuery = {};
                    var target = event.target;
                    var targetName = target.name;
                    var targetValue = target.value;
                    if (targetCheckbox.checked) {
                        if (target.name === 'brand') {
                            paramsBrandValue.push(targetValue);
                            paramsQuery[targetName] = paramsBrandValue;
                            localStorage.set(target.name, JSON.stringify(paramsBrandValue));
                        }
                        else {
                            paramsCategoryValue.push(targetValue);
                            paramsQuery[targetName] = paramsCategoryValue;
                            localStorage.set(target.name, JSON.stringify(paramsCategoryValue));
                        }
                    }
                    else {
                        if (target.name === 'brand') {
                            paramsBrandValue = paramsBrandValue.filter(function (item) { return item !== targetValue; });
                            paramsQuery[targetName] = paramsBrandValue;
                        }
                        else {
                            paramsCategoryValue = paramsCategoryValue.filter(function (item) { return item !== targetValue; });
                            paramsQuery[targetName] = paramsCategoryValue;
                        }
                        if (paramsCategoryValue.length === 0) {
                            localStorage.clear('category');
                        }
                        if (paramsBrandValue.length === 0) {
                            localStorage.clear('brand');
                        }
                    }
                    _this.setAttribute(_this.createQueryParamsKey(paramsQuery), _this.createQueryParams(paramsQuery));
                });
            });
        }
        var stoke1 = document.querySelector("#slider-stock1");
        var stoke2 = document.querySelector("#slider-stock2");
        var price1 = document.querySelector("#slider-price1");
        var price2 = document.querySelector("#slider-price2");
        var sliders = [stoke1, stoke2, price1, price2];
        if (stoke1 && stoke2 && price1 && price2) {
            sliders.forEach(function (el) {
                el === null || el === void 0 ? void 0 : el.addEventListener('input', function (event) {
                    var paramsQuery = {};
                    var target = event.target;
                    var stoke1Value = stoke1.value;
                    var stoke2Value = stoke2.value;
                    var arrStockValue = [stoke1Value, stoke2Value];
                    var price1Value = price1.value;
                    var price2Value = price2.value;
                    var arrPriceValue = [price1Value, price2Value];
                    if (target.type === 'range') {
                        if (target.id.indexOf('slider-price') !== -1) {
                            paramsQuery['price'] = arrPriceValue;
                            localStorage.set('price', arrPriceValue.toString());
                        }
                        else {
                            paramsQuery['stock'] = arrStockValue;
                            localStorage.set('stock', arrStockValue.toString());
                        }
                    }
                    _this.setAttribute(_this.createQueryParamsKey(paramsQuery), _this.createQueryParams(paramsQuery));
                });
            });
        }
        if (search) {
            search.addEventListener('input', function (event) {
                var paramsQuery = {};
                var targetSearch = event.target;
                var targetValueSearch = targetSearch.value;
                paramsQuery['search'] = [targetValueSearch];
                localStorage.set('search', targetValueSearch);
                if (targetValueSearch.length === 0) {
                    localStorage.clear('search');
                }
                _this.setAttribute('search', _this.createQueryParams(paramsQuery));
            });
            search.textContent = localStorage.get('search');
        }
        var buttonDefault = document.querySelector('.reset-button');
        if (buttonDefault) {
            buttonDefault.onclick = function () {
                var url = new URL(window.location.origin);
                history.pushState('', '', url.toString());
                localStorage.clearAll();
            };
        }
        var buttonCopy = document.querySelector('.copy-button');
        if (buttonCopy) {
            buttonCopy.onclick = function () {
                var copyUrl = document.createElement('input');
                copyUrl.value = window.location.href;
                document.body.appendChild(copyUrl);
                copyUrl.select();
                document.execCommand('copy');
                document.body.removeChild(copyUrl);
            };
        }
        var sortOptions = document.querySelectorAll('.sort-options__name');
        sortOptions.forEach(function (el) {
            el.addEventListener('click', function (event) {
                var sortTarget = event.target;
                if (sortTarget instanceof Element) {
                    var sortValue = sortTarget.getAttribute('value');
                    var paramsQuery = {};
                    if (sortValue) {
                        paramsQuery['sort'] = [sortValue];
                        _this.setAttribute('sort', _this.createQueryParams(paramsQuery));
                        var sortName = document.querySelector('.sort-name');
                        if (sortName) {
                            sortName.textContent = sortTarget.textContent;
                        }
                    }
                }
            });
        });
    };
    return AddQueryParams;
}());
exports.AddQueryParams = AddQueryParams;
exports["default"] = AddQueryParams;


/***/ }),

/***/ 560:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PageRouter = void 0;
var Router = __webpack_require__(937);
var cartPage_1 = __webpack_require__(266);
var itemPage_1 = __webpack_require__(966);
var mainPage_1 = __webpack_require__(798);
var PageRouter = /** @class */ (function (_super) {
    __extends(PageRouter, _super);
    function PageRouter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPage = new itemPage_1.ItemPage();
        _this.mainPage = new mainPage_1.MainPage();
        _this.cartPage = new cartPage_1.CartPage();
        return _this;
    }
    PageRouter.prototype.routerSetup = function (data) {
        var _this = this;
        data.forEach(function (item) {
            _this.add("products/".concat(item.id), function () { return _this.itemPage.drawItemPage(item); });
        });
        this.add('/', function () { return _this.mainPage.drawMainPage(); });
        this.add('cart', function () { return _this.cartPage.drawCartPage(); });
    };
    PageRouter.prototype.setupPageHooks = function () {
        var _this = this;
        var _a;
        var body = document.querySelector('body');
        if (body instanceof Element) {
            body.addEventListener('click', function (event) {
                _this.navigateToItemPage(event);
            });
        }
        (_a = document.querySelector('.shopping-cart')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return _this.navigateToCartPage(); });
    };
    PageRouter.prototype.addDOMContentLoadedListener = function () {
        var _this = this;
        window.addEventListener('DOMContentLoaded', function () { return _this.check(); });
    };
    PageRouter.prototype.navigateToItemPage = function (event) {
        var target = event.target;
        if (target instanceof Element && !target.closest('.add-to-cart-button')) {
            var item = target.closest('.item');
            if (item instanceof HTMLDivElement && item !== null) {
                this.navigateTo("products/".concat(item.id));
            }
            if (target.closest('.product-info')) {
                var product = target.closest('.product');
                if (product instanceof HTMLDivElement) {
                    this.navigateTo("products/".concat(product.id));
                }
            }
        }
    };
    PageRouter.prototype.navigateToCartPage = function () {
        this.navigateTo('cart');
    };
    return PageRouter;
}(Router));
exports.PageRouter = PageRouter;


/***/ }),

/***/ 899:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.FiletsCategoryRange = exports.FiletsCategory = void 0;
var FiletsCategory;
(function (FiletsCategory) {
    FiletsCategory["Brand"] = "brand";
    FiletsCategory["Category"] = "category";
})(FiletsCategory = exports.FiletsCategory || (exports.FiletsCategory = {}));
var FiletsCategoryRange;
(function (FiletsCategoryRange) {
    FiletsCategoryRange["Stock"] = "stock";
    FiletsCategoryRange["Price"] = "price";
})(FiletsCategoryRange = exports.FiletsCategoryRange || (exports.FiletsCategoryRange = {}));


/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var __1 = __webpack_require__(607);
var costUtils_1 = __webpack_require__(119);
var american_express_logo_png_1 = __webpack_require__(417);
var master_card_logo_png_1 = __webpack_require__(367);
var visa_logo_png_1 = __webpack_require__(58);
var union_logo_png_1 = __webpack_require__(771);
var ByNowPopUp = /** @class */ (function () {
    function ByNowPopUp() {
        this.data = {
            name: '',
            surname: '',
            country: '',
            city: '',
            state: '',
            address: '',
            post: ''
        };
        this.card = {
            cardNumber: '',
            cardCvv: '',
            cardDate: ''
        };
    }
    ByNowPopUp.prototype.drawPopUp = function (event) {
        var _this = this;
        var target = event.target;
        if (target instanceof Element) {
            if (!target.closest('.by-now-button')) {
                return;
            }
        }
        var fragment = document.createDocumentFragment();
        var popUpTemp = document.querySelector('#buyNowPopUp');
        if (popUpTemp) {
            var popUpClone = popUpTemp.content.cloneNode(true);
            if (popUpClone instanceof DocumentFragment) {
                var popUpPriceText = popUpClone.querySelector('.order-amount');
                var dataPopUpInputs = popUpClone.querySelectorAll('.data-popUp-input');
                dataPopUpInputs.forEach(function (input) {
                    if (input instanceof HTMLInputElement) {
                        var inputId = input.id;
                        input.value = _this.data[inputId];
                    }
                });
                var items = [];
                var localData = __1.app.localStorage.get('items');
                if (localData) {
                    items = JSON.parse(localData);
                }
                if (popUpPriceText) {
                    var discountCost = (0, costUtils_1.getTotalCost)(items).discountCost;
                    popUpPriceText.textContent = "".concat(discountCost, "$").replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
                }
            }
            fragment.appendChild(popUpClone);
            var body = document.querySelector('.body');
            if (body) {
                body.appendChild(fragment);
            }
        }
    };
    ByNowPopUp.prototype.closePopUp = function (event) {
        var target = event.target;
        if (target instanceof Element) {
            var popUp = target.closest('.buy-now-pop-up-block');
            if (!popUp)
                return;
            if (target.closest('.buy-now-block'))
                return;
            popUp.remove();
        }
    };
    ByNowPopUp.prototype.setData = function (event) {
        var target = event.target;
        if (target instanceof HTMLInputElement && target.closest('.data-popUp-input')) {
            var inputId = target.id;
            if (typeof this.data[inputId] !== 'undefined') {
                target.classList.remove('invalid-input');
                this.data[inputId] = target.value;
            }
        }
    };
    ByNowPopUp.prototype.setCardNumber = function (event) {
        var target = event.target;
        if (target instanceof HTMLInputElement && target.closest('.card-number')) {
            target.classList.remove('invalid-input');
            var cardNumber = target.value.replace(/[^\d]/g, '').substring(0, 20);
            if (cardNumber !== '') {
                this.card.cardNumber = cardNumber;
                var formattedArr = cardNumber.match(/.{1,4}/g);
                if (formattedArr) {
                    cardNumber = formattedArr.join(' ');
                    target.value = cardNumber;
                    this.changeCardLogo();
                }
            }
            else {
                target.value = '';
            }
        }
    };
    ByNowPopUp.prototype.changeCardLogo = function () {
        var cardLogo = document.querySelector('.card-logo');
        var other = document.querySelector('.other-payment-method-text');
        if (!cardLogo || !other)
            return;
        var firstNumber = this.card.cardNumber.at(0);
        other.style.display = 'none';
        switch (firstNumber) {
            case '1':
                console.log(american_express_logo_png_1["default"]);
                cardLogo.style.backgroundImage = "url('".concat(american_express_logo_png_1["default"], "')");
                break;
            case '2':
                cardLogo.style.backgroundImage = "url('".concat(master_card_logo_png_1["default"], "')");
                break;
            case '3':
                cardLogo.style.backgroundImage = "url('".concat(visa_logo_png_1["default"], "')");
                break;
            case '4':
                cardLogo.style.backgroundImage = "url('".concat(union_logo_png_1["default"], "')");
                break;
            default:
                other.style.display = 'block';
                cardLogo.style.backgroundImage = '';
        }
    };
    ByNowPopUp.prototype.setCardDate = function (event) {
        var target = event.target;
        if (target instanceof HTMLInputElement && target.closest('.card-valid-thru')) {
            target.classList.remove('invalid-input');
            var cardDate = target.value.replace(/[^\d]/g, '').substring(0, 4);
            if (cardDate !== '') {
                var formattedArr = cardDate.match(/.{1,2}/g);
                if (formattedArr) {
                    cardDate = formattedArr.join('/');
                    this.card.cardDate = cardDate;
                    target.value = cardDate;
                }
            }
            else {
                target.value = '';
            }
        }
    };
    ByNowPopUp.prototype.setCVV = function (event) {
        var target = event.target;
        if (target instanceof HTMLInputElement && target.closest('.card-cvv')) {
            target.classList.remove('invalid-input');
            var cardCVV = target.value.replace(/[^\d]/g, '').substring(0, 3);
            if (cardCVV !== '') {
                target.value = cardCVV;
                this.card.cardCvv = cardCVV;
            }
            else {
                target.value = '';
            }
        }
    };
    ByNowPopUp.prototype.validateInputs = function () {
        var invalidIdsArr = [];
        Object.entries(this.data).forEach(function (dataEl) {
            var elKey = dataEl[0];
            var elVal = dataEl[1];
            if (!elVal.trim()) {
                invalidIdsArr.push(elKey);
            }
        });
        return invalidIdsArr;
    };
    ByNowPopUp.prototype.confirmOrder = function (event) {
        var target = event.target;
        if (target instanceof Element && !target.closest('.confirm-order-button')) {
            return;
        }
        var isAllValid = true;
        var hiddenTextData = document.querySelector('.data-text');
        if (hiddenTextData) {
            hiddenTextData.classList.remove('showed-pop-up-text');
            var invalidIds = this.validateInputs();
            if (invalidIds.length !== 0) {
                isAllValid = false;
                invalidIds.forEach(function (id) {
                    var invalidInput = document.querySelector("#".concat(id));
                    if (invalidInput) {
                        invalidInput.classList.add('invalid-input');
                    }
                });
                hiddenTextData.textContent = "Please correctly fill out the next fields: ".concat(invalidIds.join(', '));
                hiddenTextData.classList.add('showed-pop-up-text');
            }
        }
        var hiddenTextCard = document.querySelector('.card-text');
        var inputCardNumber = document.querySelector('.card-number');
        var inputCardDate = document.querySelector('.card-valid-thru');
        var inputCardCvv = document.querySelector('.card-cvv');
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
    };
    ByNowPopUp.prototype.onOrderSuccess = function () {
        var popUp = document.querySelector('.buy-now-pop-up-block');
        if (popUp) {
            popUp.remove();
        }
        var successBlock = document.createElement('div');
        successBlock.classList.add('order-success-block');
        var successText = document.createElement('p');
        successText.classList.add('order-success-text');
        successBlock.appendChild(successText);
        var items = [];
        var localData = __1.app.localStorage.get('items');
        if (localData) {
            items = JSON.parse(localData);
        }
        var discountCost = (0, costUtils_1.getTotalCost)(items).discountCost;
        if (discountCost) {
            successText.textContent = "The ".concat(discountCost, "$ order has been successfully placed!");
        }
        var body = document.querySelector('.body');
        if (body) {
            body.appendChild(successBlock);
        }
        successText.addEventListener('animationend', function () {
            __1.app.localStorage.clearAll();
            __1.app.pageRouter.navigateTo('cart');
            location.reload();
        });
    };
    ByNowPopUp.prototype.checkCardDate = function () {
        var dateNow = new Date();
        var cardDate = new Date("".concat(this.card.cardDate
            .split('/')
            .map(function (val, i) { return (i === 1 ? "20".concat(val) : val); })
            .reverse()
            .join('-')));
        return dateNow < cardDate;
    };
    return ByNowPopUp;
}());
exports["default"] = ByNowPopUp;


/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.Cart = void 0;
var __1 = __webpack_require__(607);
var costUtils_1 = __webpack_require__(119);
var Cart = /** @class */ (function () {
    function Cart() {
    }
    Cart.prototype.drawCart = function () {
        var _a = this.getDataItems(), localItems = _a.localItems, items = _a.items, pageNumber = _a.pageNumber, limit = _a.limit;
        var fragment = document.createDocumentFragment();
        if (localItems.length === 0) {
            var cartEmptyText = document.createElement('p');
            cartEmptyText.classList.add('empty-cart-text');
            cartEmptyText.textContent = 'Cart is Empty';
            fragment.append(cartEmptyText);
        }
        else {
            var cartPageTemp = document.querySelector('#cartPage');
            var productsTemp_1 = document.querySelector('#productsInCart');
            if (cartPageTemp && productsTemp_1) {
                var cartClone_1 = cartPageTemp.content.cloneNode(true);
                items.forEach(function (item) {
                    var _a;
                    var itemClone = productsTemp_1.content.cloneNode(true);
                    if (itemClone instanceof DocumentFragment && cartClone_1 instanceof DocumentFragment) {
                        var productNumber = itemClone.querySelector('.product__number');
                        var productImg = itemClone.querySelector('.product__img');
                        var productTittle = itemClone.querySelector('.product-info__tittle');
                        var productDescription = itemClone.querySelector('.product-info__description');
                        var productRating = itemClone.querySelector('.rating-value');
                        var productDiscount = itemClone.querySelector('.discount-value');
                        var productStock = itemClone.querySelector('.stock-value');
                        var curInCart = itemClone.querySelector('.current-product-number');
                        var price = itemClone.querySelector('.price-value');
                        var addItemToCartButton = itemClone.querySelector('.button-stock-increase');
                        var removeItemToCartButton = itemClone.querySelector('.button-stock-reduce');
                        var productsBlock = cartClone_1.querySelector('.products');
                        var totalProducts = cartClone_1.querySelector('.info-number__products');
                        var totalCostText = cartClone_1.querySelector('.info-number__total');
                        var discountCostText = cartClone_1.querySelector('.price__current-price');
                        var limitNumber = cartClone_1.querySelector('.limit__number');
                        var pageNumberText = cartClone_1.querySelector('.pages__number');
                        var rsPromo = cartClone_1.querySelector('#RS-promo');
                        var epmPromo = cartClone_1.querySelector('#EPM-promo');
                        var invalidPromo = cartClone_1.querySelector('#invalid-promo');
                        var indexInCart = item.indexInCart;
                        if (productNumber &&
                            productImg &&
                            productTittle &&
                            productDescription &&
                            productRating &&
                            productDiscount &&
                            productStock &&
                            curInCart &&
                            price &&
                            productsBlock &&
                            totalCostText &&
                            totalProducts &&
                            addItemToCartButton &&
                            removeItemToCartButton &&
                            limitNumber &&
                            pageNumberText &&
                            indexInCart &&
                            rsPromo &&
                            epmPromo &&
                            invalidPromo &&
                            discountCostText) {
                            pageNumberText.textContent = "".concat(pageNumber);
                            limitNumber.value = "".concat(limit);
                            productNumber.textContent = "".concat(indexInCart);
                            productImg.style.backgroundImage = "url(".concat(item.thumbnail, ")");
                            productTittle.textContent = item.title;
                            productDescription.textContent = item.description;
                            productRating.textContent = "".concat(item.rating);
                            productDiscount.textContent = "".concat(item.discountPercentage, "%");
                            productStock.textContent = "".concat(item.stock);
                            if (item.curInCart) {
                                curInCart.textContent = "".concat(item.curInCart);
                            }
                            totalProducts.textContent = "".concat((0, costUtils_1.getTotalItems)(localItems));
                            var _b = (0, costUtils_1.getTotalCost)(localItems), totalCost = _b.totalCost, discountCost = _b.discountCost;
                            totalCostText.textContent = "".concat(totalCost, "$");
                            price.textContent = "".concat(item.price, "$");
                            addItemToCartButton.id = "".concat(item.id);
                            removeItemToCartButton.id = "".concat(item.id);
                            if (__1.app.promos.RS) {
                                rsPromo.classList.remove('text-hidden');
                            }
                            if (__1.app.promos.EPM) {
                                epmPromo.classList.remove('text-hidden');
                            }
                            if (__1.app.promos.EPM || __1.app.promos.RS) {
                                discountCostText.classList.remove('text-hidden');
                                discountCostText.textContent = "".concat(discountCost, "$");
                                totalCostText.classList.add('price__original-price');
                            }
                            if (__1.app.promos.invalidPromo) {
                                invalidPromo.classList.add('promo__promo-code-failed_show');
                            }
                            (_a = itemClone.querySelector('.product')) === null || _a === void 0 ? void 0 : _a.setAttribute('id', "".concat(item.id));
                            productsBlock.appendChild(itemClone);
                        }
                    }
                });
                fragment.appendChild(cartClone_1);
            }
        }
        var main = document.querySelector('.main .wrapper');
        if (main) {
            main.innerHTML = '';
            main.appendChild(fragment);
            __1.app.promos.invalidPromo = false;
        }
    };
    Cart.prototype.changeLimitInCart = function (event) {
        var target = event.target;
        if (target instanceof Element) {
            var limitCounter = target.closest('.limit__number');
            if (!limitCounter)
                return;
            if (limitCounter instanceof HTMLInputElement) {
                __1.app.limitCartPage = parseInt(limitCounter.value);
            }
        }
        this.drawCart();
    };
    Cart.prototype.getDataItems = function () {
        var localData = __1.app.localStorage.get('items');
        var localItems = [];
        if (localData) {
            localItems = JSON.parse(localData);
            localItems.map(function (item, i) { return (item.indexInCart = i + 1); });
        }
        var limit = __1.app.limitCartPage;
        var pageNumber = __1.app.cartPageNumber;
        var items = localItems.slice().splice((pageNumber - 1) * limit, limit);
        if (items.length === 0 && localItems.length !== 0) {
            __1.app.cartPageNumber = pageNumber - 1;
            return this.getDataItems();
        }
        return { localItems: localItems, items: items, pageNumber: pageNumber, limit: limit };
    };
    Cart.prototype.cartPageIncrease = function (event) {
        var target = event.target;
        if (target instanceof HTMLElement && target.closest('.pages-button-right')) {
            var pageNumberData = __1.app.cartPageNumber;
            __1.app.cartPageNumber = pageNumberData + 1;
            this.drawCart();
        }
    };
    Cart.prototype.cartPageDecrease = function (event) {
        var target = event.target;
        if (target instanceof HTMLElement && target.closest('.pages-button-left')) {
            var pageNumber = __1.app.cartPageNumber;
            if (pageNumber === 1) {
                return;
            }
            __1.app.cartPageNumber = pageNumber - 1;
            this.drawCart();
        }
    };
    Cart.prototype.enterPromoCode = function (event) {
        var target = event.target;
        if (target instanceof HTMLInputElement && target.closest('.promo') && event instanceof KeyboardEvent) {
            var promoInput = target.value;
            if (event.key === 'Enter') {
                if (promoInput === 'RS') {
                    __1.app.promos.RS = true;
                }
                else if (promoInput === 'EPM') {
                    __1.app.promos.EPM = true;
                }
                else {
                    __1.app.promos.invalidPromo = true;
                }
                this.drawCart();
            }
        }
    };
    Cart.prototype.removePromoCode = function (event) {
        var target = event.target;
        if (target instanceof HTMLSpanElement) {
            if (target.closest('#RS-cancel')) {
                __1.app.promos.RS = false;
                this.drawCart();
            }
            if (target.closest('#EPM-cancel')) {
                __1.app.promos.EPM = false;
                this.drawCart();
            }
        }
    };
    return Cart;
}());
exports.Cart = Cart;


/***/ }),

/***/ 436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.Cost = void 0;
var __1 = __webpack_require__(607);
var data = __webpack_require__(103);
var cart_1 = __webpack_require__(738);
var items_1 = __webpack_require__(815);
var itemPage_1 = __webpack_require__(966);
var costUtils_1 = __webpack_require__(119);
var Cost = /** @class */ (function () {
    function Cost() {
        this.cart = new cart_1.Cart();
        this.items = new items_1.Items();
        this.itemPage = new itemPage_1.ItemPage();
    }
    Cost.prototype.addItemToCart = function (event) {
        var target = event.target;
        if (target instanceof Element) {
            var targetButton_1 = target.closest('.button-stock-increase');
            if (!targetButton_1)
                return;
            var items = [];
            var localData = __1.app.localStorage.get('items');
            if (localData) {
                items = JSON.parse(localData);
            }
            var newItem_1 = data.products.find(function (el) { return el.id === parseInt(targetButton_1.id); });
            if (newItem_1) {
                var currentItem = items.find(function (el) { return el.id === newItem_1.id; });
                if (!currentItem) {
                    newItem_1.curInCart = 1;
                    items.push(newItem_1);
                }
                else {
                    if (currentItem.curInCart) {
                        if (currentItem.curInCart >= currentItem.stock) {
                            return;
                        }
                        currentItem.curInCart += 1;
                    }
                }
            }
            __1.app.localStorage.set('items', JSON.stringify(items));
            this.updateItemsInCart(items);
            var itemsSection = document.querySelector('.items-section');
            if (itemsSection) {
                this.items.drawItems(data.products);
                return;
            }
            var cartSection = document.querySelector('.cartSection');
            if (cartSection) {
                this.cart.drawCart();
                return;
            }
            var itemPageSection = document.querySelector('.item-page');
            if (itemPageSection) {
                this.itemPage.drawItemPage(newItem_1);
                return;
            }
        }
    };
    Cost.prototype.removeItemFromCart = function (event) {
        var target = event.target;
        if (target instanceof Element) {
            var targetButton_2 = target.closest('.button-stock-reduce');
            if (!targetButton_2)
                return;
            var items = [];
            var localData = __1.app.localStorage.get('items');
            if (localData) {
                items = JSON.parse(localData);
            }
            var currentItem_1 = items.find(function (el) { return el.id === parseInt(targetButton_2.id); });
            if (currentItem_1.curInCart) {
                currentItem_1.curInCart -= 1;
                if (currentItem_1.curInCart === 0) {
                    items = items.filter(function (item) { return item.id !== currentItem_1.id; });
                }
            }
            __1.app.localStorage.set('items', JSON.stringify(items));
            this.updateItemsInCart(items);
            var itemsSection = document.querySelector('.items-section');
            if (itemsSection) {
                this.items.drawItems(data.products);
                return;
            }
            var cartSection = document.querySelector('.cartSection');
            if (cartSection) {
                this.cart.drawCart();
                return;
            }
            var itemPageSection = document.querySelector('.item-page');
            if (itemPageSection) {
                this.itemPage.drawItemPage(currentItem_1);
                return;
            }
        }
    };
    Cost.prototype.updateItemsInCart = function (items) {
        var costInHeader = document.querySelector('.cost-text_price');
        var itemsNumberHeader = document.querySelector('.shopping-cart__items');
        var itemsNumber = (0, costUtils_1.getTotalItems)(items);
        var totalCost = (0, costUtils_1.getTotalCost)(items).totalCost;
        if (itemsNumberHeader && costInHeader) {
            itemsNumberHeader.textContent = "".concat(itemsNumber);
            costInHeader.textContent = "".concat(totalCost);
        }
    };
    return Cost;
}());
exports.Cost = Cost;


/***/ }),

/***/ 694:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.Filters = void 0;
var Filters = /** @class */ (function () {
    function Filters() {
    }
    Filters.prototype.drawFilters = function (data, filterCategory) {
        var fragment = document.createDocumentFragment();
        var filterTemp = document.querySelector('#filterValueTemp');
        var categoryValueArr = [];
        if (filterTemp) {
            data.forEach(function (item) {
                var filterClone = filterTemp.content.cloneNode(true);
                if (filterClone instanceof DocumentFragment) {
                    var filerCheckBox = filterClone.querySelector('.checkbox');
                    var filerValue = filterClone.querySelector('.filter_value');
                    if (filerCheckBox && filerValue) {
                        if (!categoryValueArr.includes(item[filterCategory])) {
                            filerValue.textContent = item[filterCategory];
                            filerCheckBox.name = filterCategory;
                            filerCheckBox.value = item[filterCategory];
                            fragment.append(filterClone);
                            categoryValueArr.push(item[filterCategory]);
                        }
                    }
                }
            });
        }
        var filtersBlock = document.querySelector(".".concat(filterCategory));
        if (filtersBlock) {
            filtersBlock.innerHTML = '';
            filtersBlock.appendChild(fragment);
        }
    };
    Filters.prototype.drawRangeFilters = function (data, filterName) {
        var rangeFilterFirst = document.querySelector("#slider-".concat(filterName, "1"));
        var rangeFilterSecond = document.querySelector("#slider-".concat(filterName, "2"));
        var rangeFilterFirstValue = document.querySelector("#".concat(filterName, "-value1"));
        var rangeFilterSecondValue = document.querySelector("#".concat(filterName, "-value2"));
        var rangeFilter = document.querySelector("#slider-track-".concat(filterName));
        var valueArr = data.map(function (val) { return val[filterName]; });
        var maxValue = Math.max.apply(Math, valueArr);
        var minValue = Math.min.apply(Math, valueArr);
        var minGap = 0;
        if (rangeFilterFirstValue && rangeFilterSecondValue && rangeFilterFirst && rangeFilterSecond) {
            rangeFilterFirstValue.textContent = "".concat(minValue);
            rangeFilterFirst.min = "".concat(minValue);
            rangeFilterFirst.max = "".concat(maxValue);
            rangeFilterFirst.value = "".concat(minValue);
            rangeFilterFirst.addEventListener('input', sliderFirstChangeState);
            rangeFilterFirst.addEventListener('change', sliderFirstChangeState);
            rangeFilterSecondValue.textContent = "".concat(maxValue);
            rangeFilterSecond.min = "".concat(minValue);
            rangeFilterSecond.max = "".concat(maxValue);
            rangeFilterSecond.value = "".concat(maxValue);
            rangeFilterSecond.addEventListener('input', sliderSecondChangeState);
            rangeFilterSecond.addEventListener('change', sliderSecondChangeState);
            fillColor();
        }
        function sliderFirstChangeState() {
            if (rangeFilterFirstValue && rangeFilterFirst && rangeFilterSecond) {
                if (parseInt(rangeFilterSecond.value) - parseInt(rangeFilterFirst.value) <= minGap) {
                    rangeFilterFirst.value = "".concat(parseInt(rangeFilterSecond.value) - minGap);
                }
                rangeFilterFirstValue.textContent = rangeFilterFirst.value;
                fillColor();
            }
        }
        function sliderSecondChangeState() {
            if (rangeFilterSecondValue && rangeFilterFirst && rangeFilterSecond) {
                if (parseInt(rangeFilterSecond.value) - parseInt(rangeFilterFirst.value) <= minGap) {
                    rangeFilterSecond.value = "".concat(parseInt(rangeFilterFirst.value) + minGap);
                }
                rangeFilterSecondValue.textContent = rangeFilterSecond.value;
                fillColor();
            }
        }
        function fillColor() {
            if (rangeFilterFirst && rangeFilterSecond && rangeFilter) {
                var percentFirstSlider = (parseInt(rangeFilterFirst.value) / maxValue) * 100;
                var percentSecondSlider = (parseInt(rangeFilterSecond.value) / maxValue) * 100;
                rangeFilter.style.background = "linear-gradient(to right, #dadae5 ".concat(percentFirstSlider, "% , #3264fe ").concat(percentFirstSlider, "% , #3264fe ").concat(percentSecondSlider, "%, #dadae5 ").concat(percentSecondSlider, "%)");
            }
        }
    };
    Filters.prototype.filtersChangeState = function () {
        var params = new URLSearchParams(window.location.search);
        var paramsArr = Array.from(params.entries());
        var checkBoxes = document.querySelectorAll('.checkbox');
        if (checkBoxes) {
            checkBoxes.forEach(function (el) {
                if (el instanceof HTMLInputElement) {
                    el.checked = false;
                }
            });
        }
        var searchInput = document.querySelector('.search');
        if (searchInput instanceof HTMLInputElement) {
            searchInput.value = '';
        }
        var sortName = document.querySelector('.sort-name');
        if (sortName) {
            sortName.textContent = 'Sort Options';
        }
        paramsArr.forEach(function (_a) {
            var key = _a[0], val = _a[1];
            var validValues = val.split('↕');
            validValues = validValues.map(function (val) { return decodeURI(val); });
            if (key === 'search') {
                if (searchInput instanceof HTMLInputElement) {
                    searchInput.value = validValues[0];
                }
            }
            else if (key === 'brand' || key === 'category') {
                checkBoxes.forEach(function (el) {
                    if (el instanceof HTMLInputElement) {
                        if (validValues.includes(el.value)) {
                            el.checked = true;
                        }
                    }
                });
            }
            else if (key === 'stock') {
                var stockSlider1 = document.querySelector('#slider-stock1');
                var stockSlider2 = document.querySelector('#slider-stock2');
                if (stockSlider1 instanceof HTMLInputElement && stockSlider2 instanceof HTMLInputElement) {
                    stockSlider1.value = validValues[0];
                    stockSlider2.value = validValues[1];
                    var event_1 = new Event('change');
                    stockSlider1.dispatchEvent(event_1);
                    stockSlider2.dispatchEvent(event_1);
                }
            }
            else if (key === 'price') {
                var priceSlider1 = document.querySelector('#slider-price1');
                var priceSlider2 = document.querySelector('#slider-price2');
                if (priceSlider1 instanceof HTMLInputElement && priceSlider2 instanceof HTMLInputElement) {
                    priceSlider1.value = validValues[0];
                    priceSlider2.value = validValues[1];
                    var event_2 = new Event('change');
                    priceSlider1.dispatchEvent(event_2);
                    priceSlider2.dispatchEvent(event_2);
                }
            }
            else if (key === 'sort') {
                var sortOptions = document.querySelectorAll('.sort-options__name');
                if (sortName) {
                    sortOptions.forEach(function (el) {
                        if (el.getAttribute('value') === validValues[0]) {
                            sortName.textContent = el.textContent;
                        }
                    });
                }
            }
        });
    };
    Filters.prototype.openSortOptions = function () {
        var checkbox = document.querySelector('.custom-select__checkbox');
        var sortOptions = document.querySelector('.sort-options');
        var sortCheckMark = document.querySelector('.sort-checkmark');
        if (sortOptions && sortCheckMark) {
            if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {
                sortOptions.classList.remove('sort-options_hidden');
                sortCheckMark.classList.add('sort-checkmark_rotated');
            }
            else {
                sortOptions.classList.add('sort-options_hidden');
                sortCheckMark.classList.remove('sort-checkmark_rotated');
            }
        }
    };
    return Filters;
}());
exports.Filters = Filters;


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.Items = void 0;
var __1 = __webpack_require__(607);
var Items = /** @class */ (function () {
    function Items() {
    }
    Items.prototype.drawItems = function (data) {
        var items = this.filterItems(data);
        var fragment = document.createDocumentFragment();
        var itemTemp = document.querySelector('#itemTemp');
        var productsTemp = document.querySelector('#productsInCart');
        if (itemTemp && productsTemp) {
            if (items.length === 0) {
                var noItemsText = document.createElement('p');
                noItemsText.textContent = 'No Items found 😥';
                noItemsText.classList.add('no-items-text');
                fragment.append(noItemsText);
            }
            else {
                items.forEach(function (item) {
                    var _a, _b;
                    var itemClone = itemTemp.content.cloneNode(true);
                    var productsClone = productsTemp.content.cloneNode(true);
                    if (itemClone instanceof DocumentFragment && productsClone instanceof DocumentFragment) {
                        var itemName = itemClone.querySelector('.item__name');
                        var itemImg = itemClone.querySelector('.item__img');
                        var itemDiscount = itemClone.querySelector('.item__discount');
                        var itemCharStock = itemClone.querySelector('.characteristics__stock');
                        var itemCharBrand = itemClone.querySelector('.characteristics__brand');
                        var itemCharCategory = itemClone.querySelector('.characteristics__category');
                        var itemCharRating = itemClone.querySelector('.characteristics__rating');
                        var curPrice = itemClone.querySelector('.price__current-price');
                        var origPrice = itemClone.querySelector('.price__original-price');
                        var addToCartButtonBlock = itemClone.querySelector('.add-to-cart-button');
                        var addToCartDefaultButton = itemClone.querySelector('.add-to-cart-button .button-stock-increase');
                        if (itemName &&
                            itemImg &&
                            itemDiscount &&
                            itemCharStock &&
                            itemCharBrand &&
                            itemCharCategory &&
                            itemCharRating &&
                            curPrice &&
                            origPrice &&
                            addToCartButtonBlock &&
                            addToCartDefaultButton) {
                            itemName.textContent = item.title;
                            itemImg.style.backgroundImage = "url(".concat(item.thumbnail, ")");
                            itemDiscount.textContent = "-".concat(item.discountPercentage, "%");
                            itemCharStock.textContent = "".concat(item.stock);
                            itemCharBrand.textContent = item.brand;
                            itemCharCategory.textContent = item.category;
                            itemCharRating.textContent = "".concat(item.rating);
                            curPrice.textContent = "".concat(item.price, "$");
                            origPrice.textContent = "".concat((item.price / (1 - item.discountPercentage / 100)).toFixed(0), "$");
                            addToCartDefaultButton.id = "".concat(item.id);
                            var localData = __1.app.localStorage.get('items');
                            var localItems = [];
                            if (localData) {
                                localItems = JSON.parse(localData);
                            }
                            var localItem = localItems.find(function (el) { return el.id === item.id; });
                            if (localItem) {
                                (_a = itemClone.querySelector('.item')) === null || _a === void 0 ? void 0 : _a.classList.add('item-in-cart');
                                var controlPanel = productsClone.querySelector('.stock-changing');
                                var addItemToCartButton = productsClone.querySelector('.button-stock-increase');
                                var removeItemFromCartButton = productsClone.querySelector('.button-stock-reduce');
                                var itemsInCart = productsClone.querySelector('.current-product-number');
                                if (controlPanel && addItemToCartButton && removeItemFromCartButton && itemsInCart) {
                                    addItemToCartButton.id = "".concat(item.id);
                                    removeItemFromCartButton.id = "".concat(item.id);
                                    if (localItem.curInCart) {
                                        itemsInCart.textContent = "".concat(localItem.curInCart);
                                    }
                                    addToCartButtonBlock.innerHTML = '';
                                    addToCartButtonBlock.appendChild(controlPanel);
                                }
                            }
                            (_b = itemClone.querySelector('.item')) === null || _b === void 0 ? void 0 : _b.setAttribute('id', "".concat(item.id));
                            fragment.append(itemClone);
                        }
                    }
                });
            }
        }
        var itemsSection = document.querySelector('.items-section');
        if (itemsSection) {
            itemsSection.innerHTML = '';
            itemsSection.appendChild(fragment);
        }
        var itemsFound = document.querySelector('.items-found');
        if (itemsFound) {
            itemsFound.textContent = "Items found: ".concat(items.length);
        }
    };
    Items.prototype.filterItems = function (data) {
        var params = new URLSearchParams(window.location.search);
        if (params) {
            var paramsArr = Array.from(params.entries());
            paramsArr.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var validValues = value.split('↕');
                validValues = validValues.map(function (val) { return decodeURI(val); });
                if (key === 'brand') {
                    data = data.filter(function (val) { return validValues.includes(val.brand); });
                }
                else if (key === 'category') {
                    data = data.filter(function (val) { return validValues.includes(val.category); });
                }
                else if (key === 'stock') {
                    data = data.filter(function (val) { return val.stock >= parseInt(validValues[0]) && val.stock <= parseInt(validValues[1]); });
                }
                else if (key === 'price') {
                    data = data.filter(function (val) { return val.price >= parseInt(validValues[0]) && val.price <= parseInt(validValues[1]); });
                }
                else if (key === 'search') {
                    data = data.filter(function (val) {
                        var _a;
                        var valArr = Object.entries(val);
                        for (var _i = 0, valArr_1 = valArr; _i < valArr_1.length; _i++) {
                            _a = valArr_1[_i], key = _a[0], value = _a[1];
                            if (key !== 'id' && key !== 'images' && key !== 'thumbnail') {
                                if (typeof value === 'string' || typeof value === 'number') {
                                    var strValue = value.toString().toLowerCase();
                                    var validSearch = validValues[0].toLowerCase();
                                    if (strValue.indexOf(validSearch) !== -1) {
                                        return true;
                                    }
                                }
                            }
                        }
                    });
                }
                else if (key === 'sort') {
                    var sortingOptions = validValues[0].split('-');
                    var sortName_1 = sortingOptions[0];
                    var sortCategory = sortingOptions[1];
                    if (sortName_1 === 'price' || sortName_1 === 'discountPercentage' || sortName_1 === 'rating') {
                        if (sortCategory === 'asc') {
                            data = data.sort(function (a, b) { return a[sortName_1] - b[sortName_1]; });
                        }
                        else if (sortCategory === 'desc') {
                            data = data.sort(function (a, b) { return b[sortName_1] - a[sortName_1]; });
                        }
                    }
                }
            });
        }
        return data;
    };
    return Items;
}());
exports.Items = Items;


/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.CartPage = void 0;
var cart_1 = __webpack_require__(738);
var CartPage = /** @class */ (function () {
    function CartPage() {
        this.cart = new cart_1.Cart();
    }
    CartPage.prototype.drawCartPage = function () {
        this.cart.drawCart();
    };
    return CartPage;
}());
exports.CartPage = CartPage;


/***/ }),

/***/ 966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.ItemPage = void 0;
var __1 = __webpack_require__(607);
var ItemPage = /** @class */ (function () {
    function ItemPage() {
    }
    ItemPage.prototype.drawItemPage = function (item) {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var pageTemp = document.querySelector('#itemPage');
        var productsTemp = document.querySelector('#productsInCart');
        if (pageTemp && productsTemp) {
            var pageClone = pageTemp.content.cloneNode(true);
            var productsClone = productsTemp.content.cloneNode(true);
            if (pageClone instanceof DocumentFragment && productsClone instanceof DocumentFragment) {
                var itemCategoryPath = pageClone.querySelector('.item-path__text_category');
                var itemBrandPath = pageClone.querySelector('.item-path__text_brand');
                var itemTittlePath = pageClone.querySelector('.item-path__text_tittle');
                var tittle = pageClone.querySelector('.item-info__name');
                var sideImages_1 = pageClone.querySelector('.side-images');
                var mainImg = pageClone.querySelector('.main-image');
                var discountPercentage = pageClone.querySelector('.item__discount_info');
                var description = pageClone.querySelector('.characteristics__description');
                var stock = pageClone.querySelector('.characteristics__stock');
                var brand = pageClone.querySelector('.characteristics__brand');
                var category = pageClone.querySelector('.characteristics__category');
                var rating = pageClone.querySelector('.characteristics__rating');
                var curPrice = pageClone.querySelector('.price__current-price');
                var origPrice = pageClone.querySelector('.price__original-price');
                var storeLink = pageClone.querySelector('.item-path__text_store');
                var addToCartButtonBlock = pageClone.querySelector('.add-to-cart-button');
                var addToCartDefaultButton = pageClone.querySelector('.add-to-cart-button .button-stock-increase');
                if (itemCategoryPath &&
                    itemBrandPath &&
                    itemTittlePath &&
                    tittle &&
                    sideImages_1 &&
                    mainImg &&
                    discountPercentage &&
                    description &&
                    stock &&
                    brand &&
                    category &&
                    rating &&
                    curPrice &&
                    origPrice &&
                    storeLink &&
                    addToCartButtonBlock &&
                    addToCartDefaultButton) {
                    itemCategoryPath.textContent = item.category;
                    itemBrandPath.textContent = item.brand;
                    itemTittlePath.textContent = item.title;
                    tittle.textContent = item.title;
                    item.images.forEach(function (img) {
                        var imgItem = document.createElement('p');
                        imgItem.classList.add('side-images__img');
                        imgItem.style.backgroundImage = "url(".concat(img, ")");
                        sideImages_1.appendChild(imgItem);
                    });
                    mainImg.style.backgroundImage = "url(".concat(item.thumbnail, ")");
                    discountPercentage.textContent = "-".concat(item.discountPercentage, "%");
                    description.textContent = item.description;
                    stock.textContent = "".concat(item.stock);
                    brand.textContent = item.brand;
                    category.textContent = item.category;
                    rating.textContent = "".concat(item.rating);
                    curPrice.textContent = "".concat(item.price, "$");
                    origPrice.textContent = "".concat((item.price / (1 - item.discountPercentage / 100)).toFixed(0), "$");
                    addToCartDefaultButton.id = "".concat(item.id);
                    fragment.append(pageClone);
                    var main = document.querySelector('.main .wrapper');
                    if (main) {
                        main.innerHTML = '';
                        main.appendChild(fragment);
                    }
                    itemCategoryPath.addEventListener('click', function () {
                        __1.app.pageRouter.navigateTo("?category=".concat(item.category));
                    });
                    itemBrandPath.addEventListener('click', function () {
                        return __1.app.pageRouter.navigateTo("?category=".concat(encodeURI(item.category), "&brand=").concat(encodeURI(item.brand)));
                    });
                    storeLink.addEventListener('click', function () { return __1.app.pageRouter.navigateTo('/'); });
                    sideImages_1.addEventListener('click', function (event) {
                        _this.changeImg(event);
                    });
                    var localData = __1.app.localStorage.get('items');
                    var localItems = [];
                    if (localData) {
                        localItems = JSON.parse(localData);
                    }
                    var localItem = localItems.find(function (el) { return el.id === item.id; });
                    if (localItem) {
                        var controlPanel = productsClone.querySelector('.stock-changing');
                        var addItemToCartButton = productsClone.querySelector('.button-stock-increase');
                        var removeItemFromCartButton = productsClone.querySelector('.button-stock-reduce');
                        var itemsInCart = productsClone.querySelector('.current-product-number');
                        if (controlPanel && addItemToCartButton && removeItemFromCartButton && itemsInCart) {
                            addItemToCartButton.id = "".concat(item.id);
                            removeItemFromCartButton.id = "".concat(item.id);
                            if (localItem.curInCart) {
                                itemsInCart.textContent = "".concat(localItem.curInCart);
                            }
                            addToCartButtonBlock.innerHTML = '';
                            addToCartButtonBlock.appendChild(controlPanel);
                        }
                    }
                }
            }
        }
    };
    ItemPage.prototype.changeImg = function (event) {
        var imgTarget = event.target;
        if (imgTarget instanceof Element) {
            var img = imgTarget.closest('.side-images__img');
            if (img instanceof HTMLParagraphElement) {
                var mainImg = document.querySelector('.main-image');
                if (mainImg instanceof HTMLDivElement) {
                    mainImg.style.backgroundImage = img.style.backgroundImage;
                }
            }
        }
    };
    return ItemPage;
}());
exports.ItemPage = ItemPage;


/***/ }),

/***/ 798:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.MainPage = void 0;
var routerFilter_1 = __webpack_require__(438);
var filters_1 = __webpack_require__(694);
var items_1 = __webpack_require__(815);
var data = __webpack_require__(103);
var dataTypes_1 = __webpack_require__(899);
var MainPage = /** @class */ (function () {
    function MainPage() {
        this.items = new items_1.Items();
        this.filters = new filters_1.Filters();
        this.routerFilter = new routerFilter_1["default"]();
    }
    MainPage.prototype.drawMainPage = function () {
        var _this = this;
        var _a, _b;
        var pageTemp = document.querySelector('#mainPage');
        if (pageTemp) {
            var main = document.querySelector('.main .wrapper');
            if (main) {
                main.innerHTML = '';
                main.appendChild(pageTemp.content.cloneNode(true));
            }
        }
        this.items.drawItems(data.products);
        this.filters.drawFilters(data.products, dataTypes_1.FiletsCategory.Brand);
        this.filters.drawFilters(data.products, dataTypes_1.FiletsCategory.Category);
        this.filters.drawRangeFilters(data.products, dataTypes_1.FiletsCategoryRange.Price);
        this.filters.drawRangeFilters(data.products, dataTypes_1.FiletsCategoryRange.Stock);
        this.filters.filtersChangeState();
        this.routerFilter.add();
        (_a = document.querySelector('.sort-value')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return _this.filters.openSortOptions(); });
        document
            .querySelectorAll('input')
            .forEach(function (el) { return el.addEventListener('input', function () { return _this.items.drawItems(data.products); }); });
        (_b = document.querySelector('.reset-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            _this.items.drawItems(data.products);
            _this.filters.filtersChangeState();
        });
    };
    return MainPage;
}());
exports.MainPage = MainPage;


/***/ }),

/***/ 119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.getTotalItems = exports.getTotalCost = void 0;
var __1 = __webpack_require__(607);
function getTotalCost(items) {
    var totalCost = items.reduce(function (cost, item) {
        if (item.curInCart) {
            return cost + item.price * item.curInCart;
        }
        return 0;
    }, 0);
    var discountCost = totalCost;
    if (__1.app.promos.EPM && __1.app.promos.RS) {
        discountCost = Math.ceil(totalCost * 0.85);
    }
    else if (__1.app.promos.RS) {
        discountCost = Math.ceil(totalCost * 0.9);
    }
    else if (__1.app.promos.EPM) {
        discountCost = Math.ceil(totalCost * 0.95);
    }
    return { totalCost: totalCost, discountCost: discountCost };
}
exports.getTotalCost = getTotalCost;
function getTotalItems(items) {
    return items.reduce(function (number, item) {
        if (item.curInCart) {
            return number + item.curInCart;
        }
        return 0;
    }, 0);
}
exports.getTotalItems = getTotalItems;


/***/ }),

/***/ 937:
/***/ (function(module) {

/* global window, module */

;(function (global, factory) {
     true ? module.exports = factory() :
        0
}(this, (function () {

    /**
     * Router
     *
     * @version: 1.2.7
     * @author Graidenix
     *
     * @constructor
     *
     * @param {object} options
     * @returns {Router}
     */
    function Router(options) {
        var settings = this._getSettings(options);


        this.notFoundHandler = settings.page404;
        this.mode = (!window.history || !window.history.pushState) ? "hash" : settings.mode;
        this.root = settings.root === "/" ? "/" : "/" + this._trimSlashes(settings.root) + "/";
        this.beforeHook = settings.hooks.before;
        this.securityHook = settings.hooks.secure;

        this.routes = [];
        if (settings.routes && settings.routes.length > 0) {
            var _this = this;
            settings.routes.forEach(function (route) {
                _this.add(route.rule, route.handler, route.options);
            });
        }

        this._pageState = null;
        this._currentPage = null;
        this._skipCheck = false;
        this._action = null;

        if (this.mode === "hash") {
            this._historyStack = [];
            this._historyIdx = 0;
            this._historyState = "add"
        }

        return this;
    }

    /**
     * Define Router Page
     *
     * @param {string} uri
     * @param {object} query
     * @param {Array} params
     * @param {object} state
     * @param {object} options
     *
     * @constructor
     */
    Router.Page = function (uri, query, params, state, options) {
        this.uri = uri || "";
        this.query = query || {};
        this.params = params || [];
        this.state = state || null;
        this.options = options || {};
    };

    /**
     * Sanitize options and add default values
     *
     * @param {object} options
     * @returns {object}
     * @private
     */
    Router.prototype._getSettings = function (options) {
        var settings = {};
        var defaults = {
            routes: [],
            mode: "history",
            root: "/",
            hooks: {
                "before": function () {
                },
                "secure": function () {
                    return true;
                }
            },
            page404: function (page) {
                console.error({
                    page: page,
                    message: "404. Page not found"
                });
            }
        };

        options = options || {};
        ["routes", "mode", "root", "page404"].forEach(function (key) {
            settings[key] = options[key] || defaults[key];
        });

        settings.hooks = Object.assign({}, defaults.hooks, options.hooks || {});

        return settings;
    };

    /**
     * Get URI for Router "history" mode
     *
     * @private
     * @returns {string}
     */
    Router.prototype._getHistoryFragment = function () {
        var fragment = decodeURI(window.location.pathname);
        if (this.root !== "/") {
            fragment = fragment.replace(this.root, "");
        }
        return this._trimSlashes(fragment);
    };

    /**
     * Get URI for router "hash" mode
     *
     * @private
     * @returns {string}
     */
    Router.prototype._getHashFragment = function () {
        var hash = window.location.hash.substr(1).replace(/(\?.*)$/, "");
        return this._trimSlashes(hash);
    };

    /**
     * Get current URI
     *
     * @private
     * @returns {string}
     */
    Router.prototype._getFragment = function () {
        if (this.mode === "history") {
            return this._getHistoryFragment();
        } else {
            return this._getHashFragment();
        }
    };

    /**
     * Trim slashes for path
     *
     * @private
     * @param {string} path
     * @returns {string}
     */
    Router.prototype._trimSlashes = function (path) {
        if (typeof path !== "string") {
            return "";
        }
        return path.toString().replace(/\/$/, "").replace(/^\//, "");
    };

    /**
     * 404 Page Handler
     *
     * @private
     */
    Router.prototype._page404 = function (path) {
        this._currentPage = new Router.Page(path);
        this.notFoundHandler(path);
    };

    /**
     * Convert the string route rule to RegExp rule
     *
     * @param {string} route
     * @returns {RegExp}
     * @private
     */
    Router.prototype._parseRouteRule = function (route) {
        if (typeof route !== "string") {
            return route;
        }
        var uri = this._trimSlashes(route);
        var rule = uri
            .replace(/([\\\/\-\_\.])/g, "\\$1")
            .replace(/\{[a-zA-Z]+\}/g, "(:any)")
            .replace(/\:any/g, "[\\w\\-\\_\\.]+")
            .replace(/\:word/g, "[a-zA-Z]+")
            .replace(/\:num/g, "\\d+");

        return new RegExp("^" + rule + "$", "i");
    };

    /**
     * Parse query string and return object for it
     *
     * @param {string} query
     * @returns {object}
     * @private
     */
    Router.prototype._parseQuery = function (query) {
        var _query = {};
        if (typeof query !== "string") {
            return _query;
        }

        if (query[0] === "?") {
            query = query.substr(1);
        }

        this._queryString = query;
        query.split("&").forEach(function (row) {
            var parts = row.split("=");
            if (parts[0] !== "") {
                if (parts[1] === undefined) {
                    parts[1] = true;
                }
                _query[decodeURIComponent(parts[0])] = parts[1];
            }
        });
        return _query;
    };

    /**
     * Get query for `history` mode
     *
     * @returns {Object}
     * @private
     */
    Router.prototype._getHistoryQuery = function () {
        return this._parseQuery(window.location.search);
    };

    /**
     * Get query for `hash` mode
     *
     * @returns {Object}
     * @private
     */
    Router.prototype._getHashQuery = function () {
        var index = window.location.hash.indexOf("?");
        var query = (index !== -1) ? window.location.hash.substr(index) : "";
        return this._parseQuery(query);
    };

    /**
     * Get query as object
     *
     * @private
     * @returns {Object}
     */
    Router.prototype._getQuery = function () {
        if (this.mode === "history") {
            return this._getHistoryQuery();
        } else {
            return this._getHashQuery();
        }
    };

    /**
     * Add route to routes list
     *
     * @param {string|RegExp} rule
     * @param {function} handler
     * @param {{}} options
     * @returns {Router}
     */
    Router.prototype.add = function (rule, handler, options) {
        this.routes.push({
            rule: this._parseRouteRule(rule),
            handler: handler,
            options: options
        });
        return this;
    };

    /**
     * Remove a route from routes list
     *
     * @param param
     * @returns {Router}
     */
    Router.prototype.remove = function (param) {
        var _this = this;
        if (typeof param === "string") {
            param = this._parseRouteRule(param).toString();
        }
        this.routes.some(function (route, i) {
            if (route.handler === param || route.rule.toString() === param) {
                _this.routes.splice(i, 1);
                return true;
            }
            return false;
        });

        return this;
    };

    /**
     * Reset the state of Router
     *
     * @returns {Router}
     */
    Router.prototype.reset = function () {
        this.routes = [];
        this.mode = null;
        this.root = "/";
        this._pageState = {};
        this.removeUriListener();

        return this;
    };

    /**
     * Add current page in history stack
     * @private
     */
    Router.prototype._pushHistory = function () {
        var _this = this,
            fragment = this._getFragment();

        if (this.mode === "hash") {
            if (this._historyState === "add") {
                if (this._historyIdx !== this._historyStack.length - 1) {
                    this._historyStack.splice(this._historyIdx + 1);
                }

                this._historyStack.push({
                    path: fragment,
                    state: _this._pageState
                });

                this._historyIdx = this._historyStack.length - 1;
            }
            this._historyState = "add";
        }
    };

    /**
     *
     * @param asyncRequest boolean
     * @returns {PromiseResult<boolean> | boolean}
     * @private
     */
    Router.prototype._unloadCallback = function (asyncRequest) {
        var result;

        if (this._skipCheck) {
            return asyncRequest ? Promise.resolve(true) : true;
        }

        if (this._currentPage && this._currentPage.options && this._currentPage.options.unloadCb) {
            result = this._currentPage.options.unloadCb(this._currentPage, asyncRequest);
            if (!asyncRequest || result instanceof Promise) {
                return result;
            }
            return result ? Promise.resolve(result) : Promise.reject(result);
        } else {
            return asyncRequest ? Promise.resolve(true) : true;
        }
    };

    /**
     * Check if router has the action for current path
     *
     * @returns {boolean}
     * @private
     */
    Router.prototype._findRoute = function () {
        var _this = this,
            fragment = this._getFragment();

        return this.routes.some(function (route) {
            var match = fragment.match(route.rule);
            if (match) {
                match.shift();
                var query = _this._getQuery();
                var page = new Router.Page(fragment, query, match, _this._pageState, route.options);

                if (!_this.securityHook(page)) {
                    return false;
                }

                _this._currentPage = page;
                if (_this._skipCheck) {
                    _this._skipCheck = false;
                    return true;
                }
                _this.beforeHook(page);
                route.handler.apply(page, match);
                _this._pageState = null;

                window.onbeforeunload = function (ev) {
                    if (_this._unloadCallback(false)) {
                        return;
                    }
                    ev.returnValue = true;
                    return true;
                };

                return true;
            }
            return false;
        });
    };

    /**
     *
     */
    Router.prototype._treatAsync = function () {
        var result;

        result = this._currentPage.options.unloadCb(this._currentPage, true);
        if (!(result instanceof Promise)) {
            result = result ? Promise.resolve(result) : Promise.reject(result);
        }

        result
            .then(this._processUri.bind(this))
            .catch(this._resetState.bind(this));
    };

    /**
     *
     * @private
     */
    Router.prototype._resetState = function () {
        this._skipCheck = true;
        this.navigateTo(this._current, this._currentPage.state, true);
    };

    /**
     * Replace current page with new one
     */
    Router.prototype._processUri = function () {
        var fragment = this._getFragment(),
            found;

        this._current = fragment;
        this._pushHistory();

        found = this._findRoute.call(this);
        if (!found) {
            this._page404(fragment);
        }
    };

    /**
     * Check the URL and execute handler for its route
     *
     * @returns {Router}
     */
    Router.prototype.check = function () {
        if (this._skipCheck) return this;

        // if page has unload cb treat as promise
        if (this._currentPage && this._currentPage.options && this._currentPage.options.unloadCb) {
            this._treatAsync();
        } else {
            this._processUri();
        }
        return this;
    };

    /**
     * Add the URI listener
     *
     * @returns {Router}
     */
    Router.prototype.addUriListener = function () {
        if (this.mode === "history") {
            window.onpopstate = this.check.bind(this);
        } else {
            window.onhashchange = this.check.bind(this);
        }

        return this;
    };

    /**
     * Remove the URI listener
     *
     * @returns {Router}
     */
    Router.prototype.removeUriListener = function () {
        window.onpopstate = null;
        window.onhashchange = null;
        return this;
    };

    /**
     * Redirect to a page with replace state
     *
     * @param {string} path
     * @param {object} state
     * @param {boolean} silent
     *
     * @returns {Router}
     */
    Router.prototype.redirectTo = function (path, state, silent) {
        path = this._trimSlashes(path) || "";
        this._pageState = state || null;
        this._skipCheck = !!silent;

        if (this.mode === "history") {
            history.replaceState(state, null, this.root + this._trimSlashes(path));
            return this.check();
        } else {
            this._historyIdx--;
            window.location.hash = path;
        }
        return this;
    };

    /**
     * Navigate to a page
     *
     * @param {string} path
     * @param {object} state
     * @param {boolean} silent
     *
     * @returns {Router}
     */
    Router.prototype.navigateTo = function (path, state, silent) {
        path = this._trimSlashes(path) || "";
        this._pageState = state || null;
        this._skipCheck = !!silent;

        if (this.mode === "history") {
            history.pushState(state, null, this.root + this._trimSlashes(path));
            return this.check();
        } else {
            window.location.hash = path;
        }
        return this;
    };

    /**
     * Refresh page with recall route handler
     * @returns {Router}
     */
    Router.prototype.refresh = function () {
        if (!this._currentPage) {
            return this;
        }
        var path = this._currentPage.uri + "?" + this._queryString;
        return this.navigateTo(path, this._currentPage.state);
    };

    /**
     * Go Back in browser history
     * Simulate "Back" button
     *
     * @returns {Router}
     */
    Router.prototype.back = function () {
        if (this.mode === "history") {
            window.history.back();
            return this;
        }

        return this.go(this._historyIdx - 1);
    };

    /**
     * Go Forward in browser history
     * Simulate "Forward" button
     *
     * @returns {Router}
     */
    Router.prototype.forward = function () {
        if (this.mode === "history") {
            window.history.forward();
            return this;
        }

        return this.go(this._historyIdx + 1);
    };

    /**
     * Go to a specific history page
     *
     * @param {number} count
     * @returns {Router}
     */
    Router.prototype.go = function (count) {
        if (this.mode === "history") {
            window.history.go(count);
            return this;
        }

        var page = this._historyStack[count];
        if (!page) {
            return this;
        }

        this._historyIdx = count;
        this._historyState = "hold";
        return this.navigateTo(page.path, page.state);
    };

    return Router;
})));

/***/ }),

/***/ 103:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"products":[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung\'s new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/4/1.jpg","https://i.dummyjson.com/data/products/4/2.jpg","https://i.dummyjson.com/data/products/4/3.jpg","https://i.dummyjson.com/data/products/4/4.jpg","https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},{"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/5/1.jpg","https://i.dummyjson.com/data/products/5/2.jpg","https://i.dummyjson.com/data/products/5/3.jpg"]},{"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"Apple","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","images":["https://i.dummyjson.com/data/products/6/1.png","https://i.dummyjson.com/data/products/6/2.jpg","https://i.dummyjson.com/data/products/6/3.png","https://i.dummyjson.com/data/products/6/4.jpg"]},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/7/1.jpg","https://i.dummyjson.com/data/products/7/2.jpg","https://i.dummyjson.com/data/products/7/3.jpg","https://i.dummyjson.com/data/products/7/thumbnail.jpg"]},{"id":8,"title":"Microsoft Surface Laptop 4","description":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","price":1499,"discountPercentage":10.23,"rating":4.43,"stock":68,"brand":"Microsoft Surface","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/8/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/8/1.jpg","https://i.dummyjson.com/data/products/8/2.jpg","https://i.dummyjson.com/data/products/8/3.jpg","https://i.dummyjson.com/data/products/8/4.jpg","https://i.dummyjson.com/data/products/8/thumbnail.jpg"]},{"id":9,"title":"Infinix INBOOK","description":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","price":1099,"discountPercentage":11.83,"rating":4.54,"stock":96,"brand":"Infinix","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/9/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/9/1.jpg","https://i.dummyjson.com/data/products/9/2.png","https://i.dummyjson.com/data/products/9/3.png","https://i.dummyjson.com/data/products/9/4.jpg","https://i.dummyjson.com/data/products/9/thumbnail.jpg"]},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/10/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/10/1.jpg","https://i.dummyjson.com/data/products/10/2.jpg","https://i.dummyjson.com/data/products/10/3.jpg","https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]},{"id":11,"title":"perfume Oil","description":"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","price":13,"discountPercentage":8.4,"rating":4.26,"stock":65,"brand":"Impression of Acqua Di Gio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/11/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/11/1.jpg","https://i.dummyjson.com/data/products/11/2.jpg","https://i.dummyjson.com/data/products/11/3.jpg","https://i.dummyjson.com/data/products/11/thumbnail.jpg"]},{"id":12,"title":"Brown Perfume","description":"Royal_Mirage Sport Brown Perfume for Men & Women - 120ml","price":40,"discountPercentage":15.66,"rating":4,"stock":52,"brand":"Royal_Mirage","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/12/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/12/1.jpg","https://i.dummyjson.com/data/products/12/2.jpg","https://i.dummyjson.com/data/products/12/3.png","https://i.dummyjson.com/data/products/12/4.jpg","https://i.dummyjson.com/data/products/12/thumbnail.jpg"]},{"id":13,"title":"Fog Scent Xpressio Perfume","description":"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men","price":13,"discountPercentage":8.14,"rating":4.59,"stock":61,"brand":"Fog Scent Xpressio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/13/thumbnail.webp","images":["https://i.dummyjson.com/data/products/13/1.jpg","https://i.dummyjson.com/data/products/13/2.png","https://i.dummyjson.com/data/products/13/3.jpg","https://i.dummyjson.com/data/products/13/4.jpg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":14,"title":"Non-Alcoholic Concentrated Perfume Oil","description":"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil","price":120,"discountPercentage":15.6,"rating":4.21,"stock":114,"brand":"Al Munakh","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/14/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/14/1.jpg","https://i.dummyjson.com/data/products/14/2.jpg","https://i.dummyjson.com/data/products/14/3.jpg","https://i.dummyjson.com/data/products/14/thumbnail.jpg"]},{"id":15,"title":"Eau De Perfume Spray","description":"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","price":30,"discountPercentage":10.99,"rating":4.7,"stock":105,"brand":"Lord - Al-Rehab","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/15/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/15/1.jpg","https://i.dummyjson.com/data/products/15/2.jpg","https://i.dummyjson.com/data/products/15/3.jpg","https://i.dummyjson.com/data/products/15/4.jpg","https://i.dummyjson.com/data/products/15/thumbnail.jpg"]},{"id":16,"title":"Hyaluronic Acid Serum","description":"L\'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid","price":19,"discountPercentage":13.31,"rating":4.83,"stock":110,"brand":"L\'Oreal Paris","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/16/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/16/1.png","https://i.dummyjson.com/data/products/16/2.webp","https://i.dummyjson.com/data/products/16/3.jpg","https://i.dummyjson.com/data/products/16/4.jpg","https://i.dummyjson.com/data/products/16/thumbnail.jpg"]},{"id":17,"title":"Tree Oil 30ml","description":"Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,","price":12,"discountPercentage":4.09,"rating":4.52,"stock":78,"brand":"Hemani Tea","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/17/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/17/1.jpg","https://i.dummyjson.com/data/products/17/2.jpg","https://i.dummyjson.com/data/products/17/3.jpg","https://i.dummyjson.com/data/products/17/thumbnail.jpg"]},{"id":18,"title":"Oil Free Moisturizer 100ml","description":"Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.","price":40,"discountPercentage":13.1,"rating":4.56,"stock":88,"brand":"Dermive","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/18/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/18/1.jpg","https://i.dummyjson.com/data/products/18/2.jpg","https://i.dummyjson.com/data/products/18/3.jpg","https://i.dummyjson.com/data/products/18/4.jpg","https://i.dummyjson.com/data/products/18/thumbnail.jpg"]},{"id":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/19/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/19/1.jpg","https://i.dummyjson.com/data/products/19/2.jpg","https://i.dummyjson.com/data/products/19/3.png","https://i.dummyjson.com/data/products/19/thumbnail.jpg"]},{"id":20,"title":"Freckle Treatment Cream- 15gm","description":"Fair & Clear is Pakistan\'s only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.","price":70,"discountPercentage":16.99,"rating":4.06,"stock":140,"brand":"Fair & Clear","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/20/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/20/1.jpg","https://i.dummyjson.com/data/products/20/2.jpg","https://i.dummyjson.com/data/products/20/3.jpg","https://i.dummyjson.com/data/products/20/4.jpg","https://i.dummyjson.com/data/products/20/thumbnail.jpg"]},{"id":21,"title":"- Daal Masoor 500 grams","description":"Fine quality Branded Product Keep in a cool and dry place","price":20,"discountPercentage":4.81,"rating":4.44,"stock":133,"brand":"Saaf & Khaas","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/21/thumbnail.png","images":["https://i.dummyjson.com/data/products/21/1.png","https://i.dummyjson.com/data/products/21/2.jpg","https://i.dummyjson.com/data/products/21/3.jpg"]},{"id":22,"title":"Elbow Macaroni - 400 gm","description":"Product details of Bake Parlor Big Elbow Macaroni - 400 gm","price":14,"discountPercentage":15.58,"rating":4.57,"stock":146,"brand":"Bake Parlor Big","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/22/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/22/1.jpg","https://i.dummyjson.com/data/products/22/2.jpg","https://i.dummyjson.com/data/products/22/3.jpg"]},{"id":23,"title":"Orange Essence Food Flavou","description":"Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item","price":14,"discountPercentage":8.04,"rating":4.85,"stock":26,"brand":"Baking Food Items","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/23/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/23/1.jpg","https://i.dummyjson.com/data/products/23/2.jpg","https://i.dummyjson.com/data/products/23/3.jpg","https://i.dummyjson.com/data/products/23/4.jpg","https://i.dummyjson.com/data/products/23/thumbnail.jpg"]},{"id":24,"title":"cereals muesli fruit nuts","description":"original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji","price":46,"discountPercentage":16.8,"rating":4.94,"stock":113,"brand":"fauji","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/24/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/24/1.jpg","https://i.dummyjson.com/data/products/24/2.jpg","https://i.dummyjson.com/data/products/24/3.jpg","https://i.dummyjson.com/data/products/24/4.jpg","https://i.dummyjson.com/data/products/24/thumbnail.jpg"]},{"id":25,"title":"Gulab Powder 50 Gram","description":"Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds","price":70,"discountPercentage":13.58,"rating":4.87,"stock":47,"brand":"Dry Rose","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/25/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/25/1.png","https://i.dummyjson.com/data/products/25/2.jpg","https://i.dummyjson.com/data/products/25/3.png","https://i.dummyjson.com/data/products/25/4.jpg","https://i.dummyjson.com/data/products/25/thumbnail.jpg"]},{"id":26,"title":"Plant Hanger For Home","description":"Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf","price":41,"discountPercentage":17.86,"rating":4.08,"stock":131,"brand":"Boho Decor","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/26/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/26/1.jpg","https://i.dummyjson.com/data/products/26/2.jpg","https://i.dummyjson.com/data/products/26/3.jpg","https://i.dummyjson.com/data/products/26/4.jpg","https://i.dummyjson.com/data/products/26/5.jpg","https://i.dummyjson.com/data/products/26/thumbnail.jpg"]},{"id":27,"title":"Flying Wooden Bird","description":"Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm","price":51,"discountPercentage":15.58,"rating":4.41,"stock":17,"brand":"Flying Wooden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/27/thumbnail.webp","images":["https://i.dummyjson.com/data/products/27/1.jpg","https://i.dummyjson.com/data/products/27/2.jpg","https://i.dummyjson.com/data/products/27/3.jpg","https://i.dummyjson.com/data/products/27/4.jpg","https://i.dummyjson.com/data/products/27/thumbnail.webp"]},{"id":28,"title":"3D Embellishment Art Lamp","description":"3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)","price":20,"discountPercentage":16.49,"rating":4.82,"stock":54,"brand":"LED Lights","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/28/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/28/1.jpg","https://i.dummyjson.com/data/products/28/2.jpg","https://i.dummyjson.com/data/products/28/3.png","https://i.dummyjson.com/data/products/28/4.jpg","https://i.dummyjson.com/data/products/28/thumbnail.jpg"]},{"id":29,"title":"Handcraft Chinese style","description":"Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate","price":60,"discountPercentage":15.34,"rating":4.44,"stock":7,"brand":"luxury palace","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/29/thumbnail.webp","images":["https://i.dummyjson.com/data/products/29/1.jpg","https://i.dummyjson.com/data/products/29/2.jpg","https://i.dummyjson.com/data/products/29/3.webp","https://i.dummyjson.com/data/products/29/4.webp","https://i.dummyjson.com/data/products/29/thumbnail.webp"]},{"id":30,"title":"Key Holder","description":"Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality","price":30,"discountPercentage":2.92,"rating":4.92,"stock":54,"brand":"Golden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/30/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/30/1.jpg","https://i.dummyjson.com/data/products/30/2.jpg","https://i.dummyjson.com/data/products/30/3.jpg","https://i.dummyjson.com/data/products/30/thumbnail.jpg"]},{"id":31,"title":"Mornadi Velvet Bed","description":"Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set","price":40,"discountPercentage":17,"rating":4.16,"stock":140,"brand":"Furniture Bed Set","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/31/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/31/1.jpg","https://i.dummyjson.com/data/products/31/2.jpg","https://i.dummyjson.com/data/products/31/3.jpg","https://i.dummyjson.com/data/products/31/4.jpg","https://i.dummyjson.com/data/products/31/thumbnail.jpg"]},{"id":32,"title":"Sofa for Coffe Cafe","description":"Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe","price":50,"discountPercentage":15.59,"rating":4.74,"stock":30,"brand":"Ratttan Outdoor","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/32/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/32/1.jpg","https://i.dummyjson.com/data/products/32/2.jpg","https://i.dummyjson.com/data/products/32/3.jpg","https://i.dummyjson.com/data/products/32/thumbnail.jpg"]},{"id":33,"title":"3 Tier Corner Shelves","description":"3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf","price":700,"discountPercentage":17,"rating":4.31,"stock":106,"brand":"Kitchen Shelf","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/33/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/33/1.jpg","https://i.dummyjson.com/data/products/33/2.jpg","https://i.dummyjson.com/data/products/33/3.jpg","https://i.dummyjson.com/data/products/33/4.jpg","https://i.dummyjson.com/data/products/33/thumbnail.jpg"]},{"id":34,"title":"Plastic Table","description":"V﻿ery good quality plastic table for multi purpose now in reasonable price","price":50,"discountPercentage":4,"rating":4.01,"stock":136,"brand":"Multi Purpose","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/34/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/34/1.jpg","https://i.dummyjson.com/data/products/34/2.jpg","https://i.dummyjson.com/data/products/34/3.jpg","https://i.dummyjson.com/data/products/34/4.jpg","https://i.dummyjson.com/data/products/34/thumbnail.jpg"]},{"id":35,"title":"3 DOOR PORTABLE","description":"Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe","price":41,"discountPercentage":7.98,"rating":4.06,"stock":68,"brand":"AmnaMart","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/35/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/35/1.jpg","https://i.dummyjson.com/data/products/35/2.jpg","https://i.dummyjson.com/data/products/35/3.jpg","https://i.dummyjson.com/data/products/35/4.jpg","https://i.dummyjson.com/data/products/35/thumbnail.jpg"]},{"id":36,"title":"Sleeve Shirt Womens","description":"Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized","price":90,"discountPercentage":10.89,"rating":4.26,"stock":39,"brand":"Professional Wear","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/36/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/36/1.jpg","https://i.dummyjson.com/data/products/36/2.webp","https://i.dummyjson.com/data/products/36/3.webp","https://i.dummyjson.com/data/products/36/4.jpg","https://i.dummyjson.com/data/products/36/thumbnail.jpg"]},{"id":37,"title":"ank Tops for Womens/Girls","description":"PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS","price":50,"discountPercentage":12.05,"rating":4.52,"stock":107,"brand":"Soft Cotton","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/37/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/37/1.jpg","https://i.dummyjson.com/data/products/37/2.jpg","https://i.dummyjson.com/data/products/37/3.jpg","https://i.dummyjson.com/data/products/37/4.jpg","https://i.dummyjson.com/data/products/37/thumbnail.jpg"]},{"id":38,"title":"sublimation plain kids tank","description":"sublimation plain kids tank tops wholesale","price":100,"discountPercentage":11.12,"rating":4.8,"stock":20,"brand":"Soft Cotton","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/38/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/38/1.png","https://i.dummyjson.com/data/products/38/2.jpg","https://i.dummyjson.com/data/products/38/3.jpg","https://i.dummyjson.com/data/products/38/4.jpg"]},{"id":39,"title":"Women Sweaters Wool","description":"2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women\' S Crop Top Sweater","price":600,"discountPercentage":17.2,"rating":4.55,"stock":55,"brand":"Top Sweater","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/39/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/39/1.jpg","https://i.dummyjson.com/data/products/39/2.jpg","https://i.dummyjson.com/data/products/39/3.jpg","https://i.dummyjson.com/data/products/39/4.jpg","https://i.dummyjson.com/data/products/39/thumbnail.jpg"]},{"id":40,"title":"women winter clothes","description":"women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set","price":57,"discountPercentage":13.39,"rating":4.91,"stock":84,"brand":"Top Sweater","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/40/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/40/1.jpg","https://i.dummyjson.com/data/products/40/2.jpg"]},{"id":41,"title":"NIGHT SUIT","description":"NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.","price":55,"discountPercentage":15.05,"rating":4.65,"stock":21,"brand":"RED MICKY MOUSE..","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/41/thumbnail.webp","images":["https://i.dummyjson.com/data/products/41/1.jpg","https://i.dummyjson.com/data/products/41/2.webp","https://i.dummyjson.com/data/products/41/3.jpg","https://i.dummyjson.com/data/products/41/4.jpg","https://i.dummyjson.com/data/products/41/thumbnail.webp"]},{"id":42,"title":"Stiched Kurta plus trouser","description":"FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN","price":80,"discountPercentage":15.37,"rating":4.05,"stock":148,"brand":"Digital Printed","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/42/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/42/1.png","https://i.dummyjson.com/data/products/42/2.png","https://i.dummyjson.com/data/products/42/3.png","https://i.dummyjson.com/data/products/42/4.jpg","https://i.dummyjson.com/data/products/42/thumbnail.jpg"]},{"id":43,"title":"frock gold printed","description":"Ghazi fabric long frock gold printed ready to wear stitched collection (G992)","price":600,"discountPercentage":15.55,"rating":4.31,"stock":150,"brand":"Ghazi Fabric","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/43/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/43/1.jpg","https://i.dummyjson.com/data/products/43/2.jpg","https://i.dummyjson.com/data/products/43/3.jpg","https://i.dummyjson.com/data/products/43/4.jpg","https://i.dummyjson.com/data/products/43/thumbnail.jpg"]},{"id":44,"title":"Ladies Multicolored Dress","description":"This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.","price":79,"discountPercentage":16.88,"rating":4.03,"stock":2,"brand":"Ghazi Fabric","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/44/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/44/1.jpg","https://i.dummyjson.com/data/products/44/2.jpg","https://i.dummyjson.com/data/products/44/3.jpg","https://i.dummyjson.com/data/products/44/4.jpg","https://i.dummyjson.com/data/products/44/thumbnail.jpg"]},{"id":45,"title":"Malai Maxi Dress","description":"Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff","price":50,"discountPercentage":5.07,"rating":4.67,"stock":96,"brand":"IELGY","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/45/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/45/1.jpg","https://i.dummyjson.com/data/products/45/2.webp","https://i.dummyjson.com/data/products/45/3.jpg","https://i.dummyjson.com/data/products/45/4.jpg","https://i.dummyjson.com/data/products/45/thumbnail.jpg"]},{"id":46,"title":"women\'s shoes","description":"Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber","price":40,"discountPercentage":16.96,"rating":4.14,"stock":72,"brand":"IELGY fashion","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/46/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/46/1.webp","https://i.dummyjson.com/data/products/46/2.jpg","https://i.dummyjson.com/data/products/46/3.jpg","https://i.dummyjson.com/data/products/46/4.jpg","https://i.dummyjson.com/data/products/46/thumbnail.jpg"]},{"id":47,"title":"Sneaker shoes","description":"Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women","price":120,"discountPercentage":10.37,"rating":4.19,"stock":50,"brand":"Synthetic Leather","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/47/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/47/1.jpg","https://i.dummyjson.com/data/products/47/2.jpg","https://i.dummyjson.com/data/products/47/3.jpg","https://i.dummyjson.com/data/products/47/thumbnail.jpeg"]},{"id":48,"title":"Women Strip Heel","description":"Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped","price":40,"discountPercentage":10.83,"rating":4.02,"stock":25,"brand":"Sandals Flip Flops","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/48/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/48/1.jpg","https://i.dummyjson.com/data/products/48/2.jpg","https://i.dummyjson.com/data/products/48/3.jpg","https://i.dummyjson.com/data/products/48/4.jpg","https://i.dummyjson.com/data/products/48/thumbnail.jpg"]},{"id":49,"title":"Chappals & Shoe Ladies Metallic","description":"Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals","price":23,"discountPercentage":2.62,"rating":4.72,"stock":107,"brand":"Maasai Sandals","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/49/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/49/1.jpg","https://i.dummyjson.com/data/products/49/2.jpg","https://i.dummyjson.com/data/products/49/3.webp","https://i.dummyjson.com/data/products/49/thumbnail.jpg"]},{"id":50,"title":"Women Shoes","description":"2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes","price":36,"discountPercentage":16.87,"rating":4.33,"stock":46,"brand":"Arrivals Genuine","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/50/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/50/1.jpeg","https://i.dummyjson.com/data/products/50/2.jpg","https://i.dummyjson.com/data/products/50/3.jpg"]},{"id":51,"title":"half sleeves T shirts","description":"Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands","price":23,"discountPercentage":12.76,"rating":4.26,"stock":132,"brand":"Vintage Apparel","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/51/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/51/1.png","https://i.dummyjson.com/data/products/51/2.jpg","https://i.dummyjson.com/data/products/51/3.jpg","https://i.dummyjson.com/data/products/51/thumbnail.jpg"]},{"id":52,"title":"FREE FIRE T Shirt","description":"quality and professional print - It doesn\'t just look high quality, it is high quality.","price":10,"discountPercentage":14.72,"rating":4.52,"stock":128,"brand":"FREE FIRE","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/52/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/52/1.png","https://i.dummyjson.com/data/products/52/2.png","https://i.dummyjson.com/data/products/52/3.jpg","https://i.dummyjson.com/data/products/52/4.jpg","https://i.dummyjson.com/data/products/52/thumbnail.jpg"]},{"id":53,"title":"printed high quality T shirts","description":"Brand: vintage Apparel ,Export quality","price":35,"discountPercentage":7.54,"rating":4.89,"stock":6,"brand":"Vintage Apparel","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/53/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/53/1.webp","https://i.dummyjson.com/data/products/53/2.jpg","https://i.dummyjson.com/data/products/53/3.jpg","https://i.dummyjson.com/data/products/53/4.jpg","https://i.dummyjson.com/data/products/53/thumbnail.jpg"]},{"id":54,"title":"Pubg Printed Graphic T-Shirt","description":"Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking","price":46,"discountPercentage":16.44,"rating":4.62,"stock":136,"brand":"The Warehouse","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/54/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/54/1.jpg","https://i.dummyjson.com/data/products/54/2.jpg","https://i.dummyjson.com/data/products/54/3.jpg","https://i.dummyjson.com/data/products/54/4.jpg","https://i.dummyjson.com/data/products/54/thumbnail.jpg"]},{"id":55,"title":"Money Heist Printed Summer T Shirts","description":"Fabric Jercy, Size: M & L Wear Stylish Dual Stiched","price":66,"discountPercentage":15.97,"rating":4.9,"stock":122,"brand":"The Warehouse","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/55/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/55/1.jpg","https://i.dummyjson.com/data/products/55/2.webp","https://i.dummyjson.com/data/products/55/3.jpg","https://i.dummyjson.com/data/products/55/4.jpg","https://i.dummyjson.com/data/products/55/thumbnail.jpg"]},{"id":56,"title":"Sneakers Joggers Shoes","description":"Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New","price":40,"discountPercentage":12.57,"rating":4.38,"stock":6,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/56/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/56/1.jpg","https://i.dummyjson.com/data/products/56/2.jpg","https://i.dummyjson.com/data/products/56/3.jpg","https://i.dummyjson.com/data/products/56/4.jpg","https://i.dummyjson.com/data/products/56/5.jpg","https://i.dummyjson.com/data/products/56/thumbnail.jpg"]},{"id":57,"title":"Loafers for men","description":"Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.","price":47,"discountPercentage":10.91,"rating":4.91,"stock":20,"brand":"Rubber","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/57/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/57/1.jpg","https://i.dummyjson.com/data/products/57/2.jpg","https://i.dummyjson.com/data/products/57/3.jpg","https://i.dummyjson.com/data/products/57/4.jpg","https://i.dummyjson.com/data/products/57/thumbnail.jpg"]},{"id":58,"title":"formal offices shoes","description":"Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber","price":57,"discountPercentage":12,"rating":4.41,"stock":68,"brand":"The Warehouse","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/58/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/58/1.jpg","https://i.dummyjson.com/data/products/58/2.jpg","https://i.dummyjson.com/data/products/58/3.jpg","https://i.dummyjson.com/data/products/58/4.jpg","https://i.dummyjson.com/data/products/58/thumbnail.jpg"]},{"id":59,"title":"Spring and summershoes","description":"Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;","price":20,"discountPercentage":8.71,"rating":4.33,"stock":137,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/59/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/59/1.jpg","https://i.dummyjson.com/data/products/59/2.jpg","https://i.dummyjson.com/data/products/59/3.jpg","https://i.dummyjson.com/data/products/59/4.jpg","https://i.dummyjson.com/data/products/59/thumbnail.jpg"]},{"id":60,"title":"Stylish Casual Jeans Shoes","description":"High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable","price":58,"discountPercentage":7.55,"rating":4.55,"stock":129,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/60/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/60/1.jpg","https://i.dummyjson.com/data/products/60/2.jpg","https://i.dummyjson.com/data/products/60/3.jpg","https://i.dummyjson.com/data/products/60/thumbnail.jpg"]},{"id":61,"title":"Leather Straps Wristwatch","description":"Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar","price":120,"discountPercentage":7.14,"rating":4.63,"stock":91,"brand":"Naviforce","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/61/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/61/1.jpg","https://i.dummyjson.com/data/products/61/2.png","https://i.dummyjson.com/data/products/61/3.jpg"]},{"id":62,"title":"Waterproof Leather Brand Watch","description":"Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours","price":46,"discountPercentage":3.15,"rating":4.05,"stock":95,"brand":"SKMEI 9117","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/62/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/62/1.jpg","https://i.dummyjson.com/data/products/62/2.jpg"]},{"id":63,"title":"Royal Blue Premium Watch","description":"Men Silver Chain Royal Blue Premium Watch Latest Analog Watch","price":50,"discountPercentage":2.56,"rating":4.89,"stock":142,"brand":"SKMEI 9117","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/63/thumbnail.webp","images":["https://i.dummyjson.com/data/products/63/1.jpg","https://i.dummyjson.com/data/products/63/2.jpg","https://i.dummyjson.com/data/products/63/3.png","https://i.dummyjson.com/data/products/63/4.jpeg"]},{"id":64,"title":"Leather Strap Skeleton Watch","description":"Leather Strap Skeleton Watch for Men - Stylish and Latest Design","price":46,"discountPercentage":10.2,"rating":4.98,"stock":61,"brand":"Strap Skeleton","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/64/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/64/1.jpg","https://i.dummyjson.com/data/products/64/2.webp","https://i.dummyjson.com/data/products/64/3.jpg","https://i.dummyjson.com/data/products/64/thumbnail.jpg"]},{"id":65,"title":"Stainless Steel Wrist Watch","description":"Stylish Watch For Man (Luxury) Classy Men\'s Stainless Steel Wrist Watch - Box Packed","price":47,"discountPercentage":17.79,"rating":4.79,"stock":94,"brand":"Stainless","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/65/thumbnail.webp","images":["https://i.dummyjson.com/data/products/65/1.jpg","https://i.dummyjson.com/data/products/65/2.webp","https://i.dummyjson.com/data/products/65/3.jpg","https://i.dummyjson.com/data/products/65/4.webp","https://i.dummyjson.com/data/products/65/thumbnail.webp"]},{"id":66,"title":"Steel Analog Couple Watches","description":"Elegant design, Stylish ,Unique & Trendy,Comfortable wear","price":35,"discountPercentage":3.23,"rating":4.79,"stock":24,"brand":"Eastern Watches","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/66/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/66/1.jpg","https://i.dummyjson.com/data/products/66/2.jpg","https://i.dummyjson.com/data/products/66/3.jpg","https://i.dummyjson.com/data/products/66/4.JPG","https://i.dummyjson.com/data/products/66/thumbnail.jpg"]},{"id":67,"title":"Fashion Magnetic Wrist Watch","description":"Buy this awesome  The product is originally manufactured by the company and it\'s a top selling product with a very reasonable","price":60,"discountPercentage":16.69,"rating":4.03,"stock":46,"brand":"Eastern Watches","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/67/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/67/1.jpg","https://i.dummyjson.com/data/products/67/2.jpg","https://i.dummyjson.com/data/products/67/3.jpg","https://i.dummyjson.com/data/products/67/4.jpg","https://i.dummyjson.com/data/products/67/thumbnail.jpg"]},{"id":68,"title":"Stylish Luxury Digital Watch","description":"Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls","price":57,"discountPercentage":9.03,"rating":4.55,"stock":77,"brand":"Luxury Digital","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/68/thumbnail.webp","images":["https://i.dummyjson.com/data/products/68/1.jpg","https://i.dummyjson.com/data/products/68/2.jpg"]},{"id":69,"title":"Golden Watch Pearls Bracelet Watch","description":"Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women","price":47,"discountPercentage":17.55,"rating":4.77,"stock":89,"brand":"Watch Pearls","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/69/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/69/1.jpg","https://i.dummyjson.com/data/products/69/2.jpg","https://i.dummyjson.com/data/products/69/3.webp","https://i.dummyjson.com/data/products/69/4.jpg","https://i.dummyjson.com/data/products/69/thumbnail.jpg"]},{"id":70,"title":"Stainless Steel Women","description":"Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies","price":35,"discountPercentage":8.98,"rating":4.08,"stock":111,"brand":"Bracelet","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/70/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/70/1.jpg","https://i.dummyjson.com/data/products/70/2.jpg","https://i.dummyjson.com/data/products/70/thumbnail.jpg"]},{"id":71,"title":"Women Shoulder Bags","description":"LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies","price":46,"discountPercentage":14.65,"rating":4.71,"stock":17,"brand":"LouisWill","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/71/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/71/1.jpg","https://i.dummyjson.com/data/products/71/2.jpg","https://i.dummyjson.com/data/products/71/3.webp","https://i.dummyjson.com/data/products/71/thumbnail.jpg"]},{"id":72,"title":"Handbag For Girls","description":"This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.","price":23,"discountPercentage":17.5,"rating":4.91,"stock":27,"brand":"LouisWill","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/72/thumbnail.webp","images":["https://i.dummyjson.com/data/products/72/1.jpg","https://i.dummyjson.com/data/products/72/2.png","https://i.dummyjson.com/data/products/72/3.webp","https://i.dummyjson.com/data/products/72/4.jpg","https://i.dummyjson.com/data/products/72/thumbnail.webp"]},{"id":73,"title":"Fancy hand clutch","description":"This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.","price":44,"discountPercentage":10.39,"rating":4.18,"stock":101,"brand":"Bracelet","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/73/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/73/1.jpg","https://i.dummyjson.com/data/products/73/2.webp","https://i.dummyjson.com/data/products/73/3.jpg","https://i.dummyjson.com/data/products/73/thumbnail.jpg"]},{"id":74,"title":"Leather Hand Bag","description":"It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.","price":57,"discountPercentage":11.19,"rating":4.01,"stock":43,"brand":"Copenhagen Luxe","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/74/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/74/1.jpg","https://i.dummyjson.com/data/products/74/2.jpg","https://i.dummyjson.com/data/products/74/3.jpg","https://i.dummyjson.com/data/products/74/4.jpg","https://i.dummyjson.com/data/products/74/thumbnail.jpg"]},{"id":75,"title":"Seven Pocket Women Bag","description":"Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag","price":68,"discountPercentage":14.87,"rating":4.93,"stock":13,"brand":"Steal Frame","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/75/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/75/1.jpg","https://i.dummyjson.com/data/products/75/2.jpg","https://i.dummyjson.com/data/products/75/3.jpg","https://i.dummyjson.com/data/products/75/thumbnail.jpg"]},{"id":76,"title":"Silver Ring Set Women","description":"Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious","price":70,"discountPercentage":13.57,"rating":4.61,"stock":51,"brand":"Darojay","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/76/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/76/1.jpg","https://i.dummyjson.com/data/products/76/2.jpg","https://i.dummyjson.com/data/products/76/thumbnail.jpg"]},{"id":77,"title":"Rose Ring","description":"Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable","price":100,"discountPercentage":3.22,"rating":4.21,"stock":149,"brand":"Copenhagen Luxe","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/77/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/77/1.jpg","https://i.dummyjson.com/data/products/77/2.jpg","https://i.dummyjson.com/data/products/77/3.jpg","https://i.dummyjson.com/data/products/77/thumbnail.jpg"]},{"id":78,"title":"Rhinestone Korean Style Open Rings","description":"Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women","price":30,"discountPercentage":8.02,"rating":4.69,"stock":9,"brand":"Fashion Jewellery","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/78/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/78/thumbnail.jpg"]},{"id":79,"title":"Elegant Female Pearl Earrings","description":"Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set","price":30,"discountPercentage":12.8,"rating":4.74,"stock":16,"brand":"Fashion Jewellery","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/79/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/79/1.jpg"]},{"id":80,"title":"Chain Pin Tassel Earrings","description":"Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)","price":45,"discountPercentage":17.75,"rating":4.59,"stock":9,"brand":"Cuff Butterfly","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/80/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/80/1.jpg","https://i.dummyjson.com/data/products/80/2.jpg","https://i.dummyjson.com/data/products/80/3.png","https://i.dummyjson.com/data/products/80/4.jpg","https://i.dummyjson.com/data/products/80/thumbnail.jpg"]},{"id":81,"title":"Round Silver Frame Sun Glasses","description":"A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,","price":19,"discountPercentage":10.1,"rating":4.94,"stock":78,"brand":"Designer Sun Glasses","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/81/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/81/1.jpg","https://i.dummyjson.com/data/products/81/2.jpg","https://i.dummyjson.com/data/products/81/3.jpg","https://i.dummyjson.com/data/products/81/4.webp","https://i.dummyjson.com/data/products/81/thumbnail.jpg"]},{"id":82,"title":"Kabir Singh Square Sunglass","description":"Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass","price":50,"discountPercentage":15.6,"rating":4.62,"stock":78,"brand":"Designer Sun Glasses","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/82/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/82/1.jpg","https://i.dummyjson.com/data/products/82/2.webp","https://i.dummyjson.com/data/products/82/3.jpg","https://i.dummyjson.com/data/products/82/4.jpg","https://i.dummyjson.com/data/products/82/thumbnail.jpg"]},{"id":83,"title":"Wiley X Night Vision Yellow Glasses","description":"Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches","price":30,"discountPercentage":6.33,"rating":4.97,"stock":115,"brand":"mastar watch","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/83/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/83/1.jpg","https://i.dummyjson.com/data/products/83/2.jpg","https://i.dummyjson.com/data/products/83/3.jpg","https://i.dummyjson.com/data/products/83/4.jpg","https://i.dummyjson.com/data/products/83/thumbnail.jpg"]},{"id":84,"title":"Square Sunglasses","description":"Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059","price":28,"discountPercentage":13.89,"rating":4.64,"stock":64,"brand":"mastar watch","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/84/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/84/1.jpg","https://i.dummyjson.com/data/products/84/2.jpg","https://i.dummyjson.com/data/products/84/thumbnail.jpg"]},{"id":85,"title":"LouisWill Men Sunglasses","description":"LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers","price":50,"discountPercentage":11.27,"rating":4.98,"stock":92,"brand":"LouisWill","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/85/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/85/1.jpg","https://i.dummyjson.com/data/products/85/2.jpg","https://i.dummyjson.com/data/products/85/thumbnail.jpg"]},{"id":86,"title":"Bluetooth Aux","description":"Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3","price":25,"discountPercentage":10.56,"rating":4.57,"stock":22,"brand":"Car Aux","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/86/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/86/1.jpg","https://i.dummyjson.com/data/products/86/2.webp","https://i.dummyjson.com/data/products/86/3.jpg","https://i.dummyjson.com/data/products/86/4.jpg","https://i.dummyjson.com/data/products/86/thumbnail.jpg"]},{"id":87,"title":"t Temperature Controller Incubator Controller","description":"Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1","price":40,"discountPercentage":11.3,"rating":4.54,"stock":37,"brand":"W1209 DC12V","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/87/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/87/1.jpg","https://i.dummyjson.com/data/products/87/2.jpg","https://i.dummyjson.com/data/products/87/3.jpg","https://i.dummyjson.com/data/products/87/4.jpg","https://i.dummyjson.com/data/products/87/thumbnail.jpg"]},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","description":"TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose","price":29,"discountPercentage":3.19,"rating":4.98,"stock":42,"brand":"TC Reusable","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/88/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/88/1.jpg","https://i.dummyjson.com/data/products/88/2.jpg","https://i.dummyjson.com/data/products/88/3.jpg","https://i.dummyjson.com/data/products/88/4.webp","https://i.dummyjson.com/data/products/88/thumbnail.jpg"]},{"id":89,"title":"Qualcomm original Car Charger","description":"best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all","price":40,"discountPercentage":17.53,"rating":4.2,"stock":79,"brand":"TC Reusable","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/89/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/89/1.jpg","https://i.dummyjson.com/data/products/89/2.jpg","https://i.dummyjson.com/data/products/89/3.jpg","https://i.dummyjson.com/data/products/89/4.jpg","https://i.dummyjson.com/data/products/89/thumbnail.jpg"]},{"id":90,"title":"Cycle Bike Glow","description":"Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w","price":35,"discountPercentage":11.08,"rating":4.1,"stock":63,"brand":"Neon LED Light","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/90/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/90/1.jpg","https://i.dummyjson.com/data/products/90/2.jpg","https://i.dummyjson.com/data/products/90/3.jpg","https://i.dummyjson.com/data/products/90/4.jpg","https://i.dummyjson.com/data/products/90/thumbnail.jpg"]},{"id":91,"title":"Black Motorbike","description":"Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM","price":569,"discountPercentage":13.63,"rating":4.04,"stock":115,"brand":"METRO 70cc Motorcycle - MR70","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/91/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/91/1.jpg","https://i.dummyjson.com/data/products/91/2.jpg","https://i.dummyjson.com/data/products/91/3.jpg","https://i.dummyjson.com/data/products/91/4.jpg","https://i.dummyjson.com/data/products/91/thumbnail.jpg"]},{"id":92,"title":"HOT SALE IN EUROPE electric racing motorcycle","description":"HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles","price":920,"discountPercentage":14.4,"rating":4.19,"stock":22,"brand":"BRAVE BULL","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/92/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/92/1.jpg","https://i.dummyjson.com/data/products/92/2.jpg","https://i.dummyjson.com/data/products/92/3.jpg","https://i.dummyjson.com/data/products/92/4.jpg"]},{"id":93,"title":"Automatic Motor Gas Motorcycles","description":"150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter","price":1050,"discountPercentage":3.34,"rating":4.84,"stock":127,"brand":"shock absorber","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/93/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/93/1.jpg","https://i.dummyjson.com/data/products/93/2.jpg","https://i.dummyjson.com/data/products/93/3.jpg","https://i.dummyjson.com/data/products/93/4.jpg","https://i.dummyjson.com/data/products/93/thumbnail.jpg"]},{"id":94,"title":"new arrivals Fashion motocross goggles","description":"new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle","price":900,"discountPercentage":3.85,"rating":4.06,"stock":109,"brand":"JIEPOLLY","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/94/thumbnail.webp","images":["https://i.dummyjson.com/data/products/94/1.webp","https://i.dummyjson.com/data/products/94/2.jpg","https://i.dummyjson.com/data/products/94/3.jpg","https://i.dummyjson.com/data/products/94/thumbnail.webp"]},{"id":95,"title":"Wholesale cargo lashing Belt","description":"Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle","price":930,"discountPercentage":17.67,"rating":4.21,"stock":144,"brand":"Xiangle","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/95/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/95/1.jpg","https://i.dummyjson.com/data/products/95/2.jpg","https://i.dummyjson.com/data/products/95/3.jpg","https://i.dummyjson.com/data/products/95/4.jpg","https://i.dummyjson.com/data/products/95/thumbnail.jpg"]},{"id":96,"title":"lighting ceiling kitchen","description":"Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern","price":30,"discountPercentage":14.89,"rating":4.83,"stock":96,"brand":"lightingbrilliance","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/96/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/96/1.jpg","https://i.dummyjson.com/data/products/96/2.jpg","https://i.dummyjson.com/data/products/96/3.jpg","https://i.dummyjson.com/data/products/96/4.jpg","https://i.dummyjson.com/data/products/96/thumbnail.jpg"]},{"id":97,"title":"Metal Ceramic Flower","description":"Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp","price":35,"discountPercentage":10.94,"rating":4.93,"stock":146,"brand":"Ifei Home","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/97/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/97/1.jpg","https://i.dummyjson.com/data/products/97/2.jpg","https://i.dummyjson.com/data/products/97/3.jpg","https://i.dummyjson.com/data/products/97/4.webp","https://i.dummyjson.com/data/products/97/thumbnail.jpg"]},{"id":98,"title":"3 lights lndenpant kitchen islang","description":"3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier","price":34,"discountPercentage":5.92,"rating":4.99,"stock":44,"brand":"DADAWU","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/98/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/98/1.jpg","https://i.dummyjson.com/data/products/98/2.jpg","https://i.dummyjson.com/data/products/98/3.jpg","https://i.dummyjson.com/data/products/98/4.jpg","https://i.dummyjson.com/data/products/98/thumbnail.jpg"]},{"id":99,"title":"American Vintage Wood Pendant Light","description":"American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante","price":46,"discountPercentage":8.84,"rating":4.32,"stock":138,"brand":"Ifei Home","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/99/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/99/1.jpg","https://i.dummyjson.com/data/products/99/2.jpg","https://i.dummyjson.com/data/products/99/3.jpg","https://i.dummyjson.com/data/products/99/4.jpg","https://i.dummyjson.com/data/products/99/thumbnail.jpg"]},{"id":100,"title":"Crystal chandelier maria theresa for 12 light","description":"Crystal chandelier maria theresa for 12 light","price":47,"discountPercentage":16,"rating":4.74,"stock":133,"brand":"YIOSI","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/100/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/100/1.jpg","https://i.dummyjson.com/data/products/100/2.jpg","https://i.dummyjson.com/data/products/100/3.jpg","https://i.dummyjson.com/data/products/100/thumbnail.jpg"]}],"total":100,"skip":0,"limit":100}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;