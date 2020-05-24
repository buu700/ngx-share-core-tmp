/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class CopyButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
    }
    /**
     * @return {?}
     */
    get text() {
        return this._disable ? this._props.extra.successLabel : this._props.text;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._disable ? this._props.extra.successIcon : this._props.icon;
    }
    /**
     * @private
     * @return {?}
     */
    _disableButton() {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    }
    /**
     * @private
     * @return {?}
     */
    _resetButton() {
        this._disable = false;
        this._disableButtonClick(false);
    }
    /**
     * @return {?}
     */
    click() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            try {
                /** @type {?} */
                const textArea = (/** @type {?} */ (this._document.createElement('textarea')));
                textArea.value = decodeURIComponent(this._url());
                this._document.body.appendChild(textArea);
                // highlight TextArea to copy the sharing link
                if (this._platform.IOS) {
                    /** @type {?} */
                    const range = this._document.createRange();
                    range.selectNodeContents(textArea);
                    /** @type {?} */
                    const selection = this._document.defaultView.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.readOnly = true;
                    textArea.setSelectionRange(0, 999999);
                }
                else {
                    textArea.select();
                }
                this._document.execCommand('copy');
                this._document.body.removeChild(textArea);
                this._disableButton();
            }
            catch (e) {
                console.warn('Copy link failed!', e.message);
            }
            finally {
                setTimeout((/**
                 * @return {?}
                 */
                () => this._resetButton()), 2000);
                resolve();
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CopyButton.prototype._disable;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2NvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekMsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFlOzs7Ozs7Ozs7OztJQVk3QyxZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFDbkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUnhFLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBRXJELENBQUM7Ozs7SUFqQkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUUsQ0FBQzs7Ozs7SUFhTyxjQUFjO1FBQ3BCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixJQUFJOztzQkFDSSxRQUFRLEdBQXdCLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUF1QjtnQkFFckcsUUFBUSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUxQyw4Q0FBOEM7Z0JBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7OzBCQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7b0JBQzFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7MEJBQzdCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7b0JBQzNELFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDNUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDbkI7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUM7b0JBQVM7Z0JBQ1IsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUEvREMsOEJBQTBCOzs7OztJQVVkLDRCQUE4Qjs7Ozs7SUFDOUIsMEJBQTRCOzs7OztJQUM1QiwyQkFBMkI7Ozs7O0lBQzNCLCtCQUE2Qjs7Ozs7SUFDN0IsK0JBQTZCOzs7OztJQUM3QixpQ0FBNkI7Ozs7O0lBQzdCLHlDQUF5RDs7Ozs7SUFDekQsNkJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24gfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29weUJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZTogYm9vbGVhbjtcblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZSA/IHRoaXMuX3Byb3BzLmV4dHJhLnN1Y2Nlc3NMYWJlbCA6IHRoaXMuX3Byb3BzLnRleHQ7XG4gIH1cblxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZSA/IHRoaXMuX3Byb3BzLmV4dHJhLnN1Y2Nlc3NJY29uIDogdGhpcy5fcHJvcHMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVCdXR0b24oKSB7XG4gICAgLy8gRGlzYWJsZSBwb2ludGVyIGZvciB0aW55IGRlbGF5XG4gICAgdGhpcy5fZGlzYWJsZSA9IHRydWU7XG4gICAgdGhpcy5fZGlzYWJsZUJ1dHRvbkNsaWNrKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRCdXR0b24oKSB7XG4gICAgdGhpcy5fZGlzYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc2FibGVCdXR0b25DbGljayhmYWxzZSk7XG4gIH1cblxuICBjbGljaygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodGhpcy5fdXJsKCkpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcblxuICAgICAgICAvLyBoaWdobGlnaHQgVGV4dEFyZWEgdG8gY29weSB0aGUgc2hhcmluZyBsaW5rXG4gICAgICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5JT1MpIHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRleHRBcmVhKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICB0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvcHkgbGluayBmYWlsZWQhJywgZS5tZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcmVzZXRCdXR0b24oKSwgMjAwMCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4iXX0=