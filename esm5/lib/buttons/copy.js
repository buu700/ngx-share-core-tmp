/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var CopyButton = /** @class */ (function (_super) {
    tslib_1.__extends(CopyButton, _super);
    function CopyButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        return _this;
    }
    Object.defineProperty(CopyButton.prototype, "text", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disable ? this._props.extra.successLabel : this._props.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CopyButton.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disable ? this._props.extra.successIcon : this._props.icon;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CopyButton.prototype._disableButton = /**
     * @private
     * @return {?}
     */
    function () {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    };
    /**
     * @private
     * @return {?}
     */
    CopyButton.prototype._resetButton = /**
     * @private
     * @return {?}
     */
    function () {
        this._disable = false;
        this._disableButtonClick(false);
    };
    /**
     * @return {?}
     */
    CopyButton.prototype.click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            try {
                /** @type {?} */
                var textArea = (/** @type {?} */ (_this._document.createElement('textarea')));
                textArea.value = decodeURIComponent(_this._url());
                _this._document.body.appendChild(textArea);
                // highlight TextArea to copy the sharing link
                if (_this._platform.IOS) {
                    /** @type {?} */
                    var range = _this._document.createRange();
                    range.selectNodeContents(textArea);
                    /** @type {?} */
                    var selection = _this._document.defaultView.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.readOnly = true;
                    textArea.setSelectionRange(0, 999999);
                }
                else {
                    textArea.select();
                }
                _this._document.execCommand('copy');
                _this._document.body.removeChild(textArea);
                _this._disableButton();
            }
            catch (e) {
                console.warn('Copy link failed!', e.message);
            }
            finally {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this._resetButton(); }), 2000);
                resolve();
            }
        }));
    };
    return CopyButton;
}(ShareButtonBase));
export { CopyButton };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2NvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQWdDLHNDQUFlO0lBWTdDLG9CQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFQckQsWUFRRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FDNUY7UUFUcUIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixVQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsYUFBTyxHQUFQLE9BQU8sQ0FBd0I7O0lBRXJELENBQUM7SUFqQkQsc0JBQUksNEJBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMzRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUUsQ0FBQzs7O09BQUE7Ozs7O0lBYU8sbUNBQWM7Ozs7SUFBdEI7UUFDRSxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU8saUNBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDBCQUFLOzs7SUFBTDtRQUFBLGlCQThCQztRQTdCQyxPQUFPLElBQUksT0FBTzs7OztRQUFDLFVBQUMsT0FBTztZQUN6QixJQUFJOztvQkFDSSxRQUFRLEdBQXdCLG1CQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUF1QjtnQkFFckcsUUFBUSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUxQyw4Q0FBOEM7Z0JBQzlDLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O3dCQUNoQixLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7b0JBQzFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7d0JBQzdCLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7b0JBQzNELFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDNUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDbkI7Z0JBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUM7b0JBQVM7Z0JBQ1IsVUFBVTs7O2dCQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLEdBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFqRUQsQ0FBZ0MsZUFBZSxHQWlFOUM7Ozs7Ozs7SUEvREMsOEJBQTBCOzs7OztJQVVkLDRCQUE4Qjs7Ozs7SUFDOUIsMEJBQTRCOzs7OztJQUM1QiwyQkFBMkI7Ozs7O0lBQzNCLCtCQUE2Qjs7Ozs7SUFDN0IsK0JBQTZCOzs7OztJQUM3QixpQ0FBNkI7Ozs7O0lBQzdCLHlDQUF5RDs7Ozs7SUFDekQsNkJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24gfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgQ29weUJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZTogYm9vbGVhbjtcblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZSA/IHRoaXMuX3Byb3BzLmV4dHJhLnN1Y2Nlc3NMYWJlbCA6IHRoaXMuX3Byb3BzLnRleHQ7XG4gIH1cblxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZSA/IHRoaXMuX3Byb3BzLmV4dHJhLnN1Y2Nlc3NJY29uIDogdGhpcy5fcHJvcHMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVCdXR0b24oKSB7XG4gICAgLy8gRGlzYWJsZSBwb2ludGVyIGZvciB0aW55IGRlbGF5XG4gICAgdGhpcy5fZGlzYWJsZSA9IHRydWU7XG4gICAgdGhpcy5fZGlzYWJsZUJ1dHRvbkNsaWNrKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRCdXR0b24oKSB7XG4gICAgdGhpcy5fZGlzYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc2FibGVCdXR0b25DbGljayhmYWxzZSk7XG4gIH1cblxuICBjbGljaygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodGhpcy5fdXJsKCkpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcblxuICAgICAgICAvLyBoaWdobGlnaHQgVGV4dEFyZWEgdG8gY29weSB0aGUgc2hhcmluZyBsaW5rXG4gICAgICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5JT1MpIHtcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRleHRBcmVhKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICB0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvcHkgbGluayBmYWlsZWQhJywgZS5tZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcmVzZXRCdXR0b24oKSwgMjAwMCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4iXX0=