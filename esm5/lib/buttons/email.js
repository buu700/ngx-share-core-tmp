/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var EmailButton = /** @class */ (function (_super) {
    tslib_1.__extends(EmailButton, _super);
    function EmailButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
            title: 'subject',
            description: 'body'
        };
        return _this;
    }
    Object.defineProperty(EmailButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "mailto:?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    EmailButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add URL to message body
        metaTags.description = metaTags.description ? metaTags.description + "\r\n" + this._url() : this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return EmailButton;
}(ShareButtonBase));
export { EmailButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBaUMsdUNBQWU7SUFXOUMscUJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQVByRCxZQVFFLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUM1RjtRQVRxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUF3QjtRQWhCM0Msd0JBQWtCLEdBQWtCO1lBQzVDLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7O0lBZUYsQ0FBQztJQWJELHNCQUFJLGdDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7Ozs7SUFhRCwyQkFBSzs7OztJQUFMLFVBQU0sUUFBdUI7UUFDM0IsMEJBQTBCO1FBQzFCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUksUUFBUSxDQUFDLFdBQVcsWUFBTyxJQUFJLENBQUMsSUFBSSxFQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFDbEcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBNUJELENBQWlDLGVBQWUsR0E0Qi9DOzs7Ozs7O0lBMUJDLHlDQUdFOzs7OztJQU1VLDZCQUE4Qjs7Ozs7SUFDOUIsMkJBQTRCOzs7OztJQUM1Qiw0QkFBMkI7Ozs7O0lBQzNCLGdDQUE2Qjs7Ozs7SUFDN0IsZ0NBQTZCOzs7OztJQUM3QixrQ0FBNkI7Ozs7O0lBQzdCLDBDQUF5RDs7Ozs7SUFDekQsOEJBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgdGl0bGU6ICdzdWJqZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ2JvZHknXG4gIH07XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYG1haWx0bzo/YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxuXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBBZGQgVVJMIHRvIG1lc3NhZ2UgYm9keVxuICAgIG1ldGFUYWdzLmRlc2NyaXB0aW9uID0gbWV0YVRhZ3MuZGVzY3JpcHRpb24gPyBgJHttZXRhVGFncy5kZXNjcmlwdGlvbn1cXHJcXG4ke3RoaXMuX3VybCgpfWAgOiB0aGlzLl91cmwoKTtcbiAgICBjb25zdCBzZXJpYWxpemVkTWV0YVRhZ3MgPSB0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncyk7XG4gICAgcmV0dXJuIHRoaXMuX29wZW4oc2VyaWFsaXplZE1ldGFUYWdzKTtcbiAgfVxufVxuIl19