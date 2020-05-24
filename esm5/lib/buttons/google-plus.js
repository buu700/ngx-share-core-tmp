/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var GooglePlusButton = /** @class */ (function (_super) {
    tslib_1.__extends(GooglePlusButton, _super);
    function GooglePlusButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
    Object.defineProperty(GooglePlusButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://plus.google.com/share?";
        },
        enumerable: true,
        configurable: true
    });
    return GooglePlusButton;
}(ShareButtonBase));
export { GooglePlusButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXBsdXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9nb29nbGUtcGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBc0MsNENBQWU7SUFVbkQsMEJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQVByRCxZQVFFLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUM1RjtRQVRxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUF3QjtRQWYzQyx3QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDOztJQWVGLENBQUM7SUFiRCxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQVlILHVCQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUFzQyxlQUFlLEdBb0JwRDs7Ozs7OztJQWxCQyw4Q0FFRTs7Ozs7SUFNVSxrQ0FBOEI7Ozs7O0lBQzlCLGdDQUE0Qjs7Ozs7SUFDNUIsaUNBQTJCOzs7OztJQUMzQixxQ0FBNkI7Ozs7O0lBQzdCLHFDQUE2Qjs7Ozs7SUFDN0IsdUNBQTZCOzs7OztJQUM3QiwrQ0FBeUQ7Ozs7O0lBQ3pELG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIEdvb2dsZVBsdXNCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgdXJsOiAndXJsJ1xuICB9O1xuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG59XG4iXX0=