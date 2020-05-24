/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var XingButton = /** @class */ (function (_super) {
    tslib_1.__extends(XingButton, _super);
    function XingButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(XingButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://www.xing.com/app/user?op=share&";
        },
        enumerable: true,
        configurable: true
    });
    return XingButton;
}(ShareButtonBase));
export { XingButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL3hpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQWdDLHNDQUFlO0lBVTdDLG9CQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFQckQsWUFRRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FDNUY7UUFUcUIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixVQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsYUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFmM0Msd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQzs7SUFlRixDQUFDO0lBYkQsc0JBQUksK0JBQU87Ozs7UUFBWDtZQUNFLE9BQU8seUNBQXlDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFZSCxpQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBZ0MsZUFBZSxHQW9COUM7Ozs7Ozs7SUFsQkMsd0NBRUU7Ozs7O0lBTVUsNEJBQThCOzs7OztJQUM5QiwwQkFBNEI7Ozs7O0lBQzVCLDJCQUEyQjs7Ozs7SUFDM0IsK0JBQTZCOzs7OztJQUM3QiwrQkFBNkI7Ozs7O0lBQzdCLGlDQUE2Qjs7Ozs7SUFDN0IseUNBQXlEOzs7OztJQUN6RCw2QkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBYaW5nQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ3VybCdcbiAgfTtcblxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxufVxuIl19