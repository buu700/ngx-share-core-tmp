/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var RedditButton = /** @class */ (function (_super) {
    tslib_1.__extends(RedditButton, _super);
    function RedditButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
            title: 'title'
        };
        return _this;
    }
    Object.defineProperty(RedditButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://www.reddit.com/submit?";
        },
        enumerable: true,
        configurable: true
    });
    return RedditButton;
}(ShareButtonBase));
export { RedditButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcmVkZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QztJQUFrQyx3Q0FBZTtJQVcvQyxzQkFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDLEVBQy9DLE9BQStCO1FBUHJELFlBUUUsa0JBQU0sTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLFNBQzVGO1FBVHFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLGFBQU8sR0FBUCxPQUFPLENBQXdCO1FBaEIzQyx3QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7O0lBZUYsQ0FBQztJQWJELHNCQUFJLGlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLCtCQUErQixDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBWUgsbUJBQUM7QUFBRCxDQUFDLEFBckJELENBQWtDLGVBQWUsR0FxQmhEOzs7Ozs7O0lBbkJDLDBDQUdFOzs7OztJQU1VLDhCQUE4Qjs7Ozs7SUFDOUIsNEJBQTRCOzs7OztJQUM1Qiw2QkFBMkI7Ozs7O0lBQzNCLGlDQUE2Qjs7Ozs7SUFDN0IsaUNBQTZCOzs7OztJQUM3QixtQ0FBNkI7Ozs7O0lBQzdCLDJDQUF5RDs7Ozs7SUFDekQsK0JBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgUmVkZGl0QnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ3VybCcsXG4gICAgdGl0bGU6ICd0aXRsZSdcbiAgfTtcblxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHR0cDovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG59XG4iXX0=