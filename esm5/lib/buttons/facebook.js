/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
var FacebookButton = /** @class */ (function (_super) {
    tslib_1.__extends(FacebookButton, _super);
    function FacebookButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._logger = _logger;
        _this.supportShareCount = true;
        _this._supportedMetaTags = {
            url: 'u'
        };
        return _this;
    }
    Object.defineProperty(FacebookButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://www.facebook.com/sharer/sharer.php?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    FacebookButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.get("https://graph.facebook.com?id=" + url).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return +res.share.share_count; })));
    };
    return FacebookButton;
}(ShareButtonBase));
export { FacebookButton };
if (false) {
    /** @type {?} */
    FacebookButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9mYWNlYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQW9DLDBDQUFlO0lBWWpELHdCQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFQckQsWUFRRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsU0FDNUY7UUFUcUIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixVQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsYUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFqQnJELHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUVmLHdCQUFrQixHQUFrQjtZQUM1QyxHQUFHLEVBQUUsR0FBRztTQUNULENBQUM7O0lBZUYsQ0FBQztJQWJELHNCQUFJLG1DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLDZDQUE2QyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBOzs7OztJQWFELG1DQUFVOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUNBQWlDLEdBQUssQ0FBQyxDQUFDLElBQUksQ0FDaEUsR0FBRzs7OztRQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBdEIsQ0FBc0IsRUFBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFvQyxlQUFlLEdBNEJsRDs7OztJQTFCQywyQ0FBeUI7Ozs7O0lBRXpCLDRDQUVFOzs7OztJQU1VLGdDQUE4Qjs7Ozs7SUFDOUIsOEJBQTRCOzs7OztJQUM1QiwrQkFBMkI7Ozs7O0lBQzNCLG1DQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QixxQ0FBNkI7Ozs7O0lBQzdCLDZDQUF5RDs7Ozs7SUFDekQsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHN1cHBvcnRTaGFyZUNvdW50ID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ3UnXG4gIH07XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG5cbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbT9pZD0ke3VybH1gKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gK3Jlcy5zaGFyZS5zaGFyZV9jb3VudClcbiAgICApO1xuICB9XG59XG4iXX0=