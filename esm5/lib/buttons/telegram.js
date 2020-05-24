/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var TelegramButton = /** @class */ (function (_super) {
    tslib_1.__extends(TelegramButton, _super);
    function TelegramButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
            url: 'url',
            description: 'text'
        };
        return _this;
    }
    Object.defineProperty(TelegramButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return 'https://t.me/share/url?';
        },
        enumerable: true,
        configurable: true
    });
    return TelegramButton;
}(ShareButtonBase));
export { TelegramButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWdyYW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy90ZWxlZ3JhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBb0MsMENBQWU7SUFXakQsd0JBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQVByRCxZQVFFLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUM1RjtRQVRxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUF3QjtRQWhCM0Msd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQzs7SUFlRixDQUFDO0lBYkQsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8seUJBQXlCLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFZSCxxQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBb0MsZUFBZSxHQXFCbEQ7Ozs7Ozs7SUFuQkMsNENBR0U7Ozs7O0lBTVUsZ0NBQThCOzs7OztJQUM5Qiw4QkFBNEI7Ozs7O0lBQzVCLCtCQUEyQjs7Ozs7SUFDM0IsbUNBQTZCOzs7OztJQUM3QixtQ0FBNkI7Ozs7O0lBQzdCLHFDQUE2Qjs7Ozs7SUFDN0IsNkNBQXlEOzs7OztJQUN6RCxpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBUZWxlZ3JhbUJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcbiAgICB1cmw6ICd1cmwnLFxuICAgIGRlc2NyaXB0aW9uOiAndGV4dCdcbiAgfTtcblxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnaHR0cHM6Ly90Lm1lL3NoYXJlL3VybD8nO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG59XG4iXX0=