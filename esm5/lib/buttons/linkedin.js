/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var LinkedinButton = /** @class */ (function (_super) {
    tslib_1.__extends(LinkedinButton, _super);
    function LinkedinButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
            title: 'title',
            description: 'summary'
        };
        return _this;
    }
    Object.defineProperty(LinkedinButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://www.linkedin.com/shareArticle?";
        },
        enumerable: true,
        configurable: true
    });
    return LinkedinButton;
}(ShareButtonBase));
export { LinkedinButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9saW5rZWRpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBb0MsMENBQWU7SUFZakQsd0JBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQVByRCxZQVFFLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUM1RjtRQVRxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUF3QjtRQWpCM0Msd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsU0FBUztTQUN2QixDQUFDOztJQWVGLENBQUM7SUFiRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyx1Q0FBdUMsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQVlILHFCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFvQyxlQUFlLEdBc0JsRDs7Ozs7OztJQXBCQyw0Q0FJRTs7Ozs7SUFNVSxnQ0FBOEI7Ozs7O0lBQzlCLDhCQUE0Qjs7Ozs7SUFDNUIsK0JBQTJCOzs7OztJQUMzQixtQ0FBNkI7Ozs7O0lBQzdCLG1DQUE2Qjs7Ozs7SUFDN0IscUNBQTZCOzs7OztJQUM3Qiw2Q0FBeUQ7Ozs7O0lBQ3pELGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIExpbmtlZGluQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ3VybCcsXG4gICAgdGl0bGU6ICd0aXRsZScsXG4gICAgZGVzY3JpcHRpb246ICdzdW1tYXJ5J1xuICB9O1xuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxufVxuIl19