/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var WhatsappButton = /** @class */ (function (_super) {
    tslib_1.__extends(WhatsappButton, _super);
    function WhatsappButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
            description: 'text'
        };
        return _this;
    }
    Object.defineProperty(WhatsappButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://wa.me/?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WhatsappButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return "whatsapp://send?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WhatsappButton.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://api.whatsapp.com/send?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    WhatsappButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? metaTags.description + "\r\n" + this._url() : this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return WhatsappButton;
}(ShareButtonBase));
export { WhatsappButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHNhcHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy93aGF0c2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBb0MsMENBQWU7SUFrQmpELHdCQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFQckQsWUFRRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FDNUY7UUFUcUIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixVQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsYUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUF2QjNDLHdCQUFrQixHQUFrQjtZQUM1QyxXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDOztJQXVCRixDQUFDO0lBckJELHNCQUFJLG1DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLGlCQUFpQixDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBRzs7OztRQUFQO1lBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTs7Ozs7SUFhRCw4QkFBSzs7OztJQUFMLFVBQU0sUUFBdUI7UUFDM0IsOEJBQThCO1FBQzlCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUksUUFBUSxDQUFDLFdBQVcsWUFBTyxJQUFJLENBQUMsSUFBSSxFQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDbEcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbkNELENBQW9DLGVBQWUsR0FtQ2xEOzs7Ozs7O0lBakNDLDRDQUVFOzs7OztJQWNVLGdDQUE4Qjs7Ozs7SUFDOUIsOEJBQTRCOzs7OztJQUM1QiwrQkFBMkI7Ozs7O0lBQzNCLG1DQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QixxQ0FBNkI7Ozs7O0lBQzdCLDZDQUF5RDs7Ozs7SUFDekQsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgV2hhdHNhcHBCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgZGVzY3JpcHRpb246ICd0ZXh0J1xuICB9O1xuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL3dhLm1lLz9gO1xuICB9XG5cbiAgZ2V0IGFuZHJvaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHdoYXRzYXBwOi8vc2VuZD9gO1xuICB9XG5cbiAgZ2V0IGlvcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxuXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBBZGQgdGhlIFVSTCB0byBtZXNzYWdlIGJvZHlcbiAgICBtZXRhVGFncy5kZXNjcmlwdGlvbiA9IG1ldGFUYWdzLmRlc2NyaXB0aW9uID8gYCR7bWV0YVRhZ3MuZGVzY3JpcHRpb259XFxyXFxuJHt0aGlzLl91cmwoKX1gIDogdGhpcy5fdXJsKCk7XG4gICAgY29uc3Qgc2VyaWFsaXplZE1ldGFUYWdzID0gdGhpcy5fc2VyaWFsaXplTWV0YVRhZ3MobWV0YVRhZ3MpO1xuICAgIHJldHVybiB0aGlzLl9vcGVuKHNlcmlhbGl6ZWRNZXRhVGFncyk7XG4gIH1cbn1cbiJdfQ==