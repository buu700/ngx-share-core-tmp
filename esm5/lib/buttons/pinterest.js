/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
var PinterestButton = /** @class */ (function (_super) {
    tslib_1.__extends(PinterestButton, _super);
    function PinterestButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
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
            url: 'url',
            description: 'description',
            image: 'media'
        };
        return _this;
    }
    Object.defineProperty(PinterestButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://pinterest.com/pin/create/button/?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    PinterestButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Check if image parameter is defined
        if (metaTags.image) {
            return this._open(this._serializeMetaTags(metaTags));
        }
        console.warn('Pinterest button: image parameter is required!');
    };
    /**
     * @param {?} url
     * @return {?}
     */
    PinterestButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.get("https://api.pinterest.com/v1/urls/count.json?url=" + url, { responseType: 'text' }).pipe(map((/**
         * @param {?} text
         * @return {?}
         */
        function (text) { return JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return +res.count; })));
    };
    return PinterestButton;
}(ShareButtonBase));
export { PinterestButton };
if (false) {
    /** @type {?} */
    PinterestButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGludGVyZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcGludGVyZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBcUMsMkNBQWU7SUFjbEQseUJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQVByRCxZQVFFLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxTQUM1RjtRQVRxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUF3QjtRQW5CckQsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBRWYsd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsV0FBVyxFQUFFLGFBQWE7WUFDMUIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDOztJQWVGLENBQUM7SUFiRCxzQkFBSSxvQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTywyQ0FBMkMsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTs7Ozs7SUFhRCwrQkFBSzs7OztJQUFMLFVBQU0sUUFBdUI7UUFDM0Isc0NBQXNDO1FBQ3RDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNuQixzREFBb0QsR0FBSyxFQUN6RCxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FDdkIsQ0FBQyxJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQXZELENBQXVELEVBQUMsRUFDOUUsR0FBRzs7OztRQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQyxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTFDRCxDQUFxQyxlQUFlLEdBMENuRDs7OztJQXhDQyw0Q0FBeUI7Ozs7O0lBRXpCLDZDQUlFOzs7OztJQU1VLGlDQUE4Qjs7Ozs7SUFDOUIsK0JBQTRCOzs7OztJQUM1QixnQ0FBMkI7Ozs7O0lBQzNCLG9DQUE2Qjs7Ozs7SUFDN0Isb0NBQTZCOzs7OztJQUM3QixzQ0FBNkI7Ozs7O0lBQzdCLDhDQUF5RDs7Ozs7SUFDekQsa0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgUGludGVyZXN0QnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcblxuICBzdXBwb3J0U2hhcmVDb3VudCA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcbiAgICB1cmw6ICd1cmwnLFxuICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxuICAgIGltYWdlOiAnbWVkaWEnXG4gIH07XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxuXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBDaGVjayBpZiBpbWFnZSBwYXJhbWV0ZXIgaXMgZGVmaW5lZFxuICAgIGlmIChtZXRhVGFncy5pbWFnZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX29wZW4odGhpcy5fc2VyaWFsaXplTWV0YVRhZ3MobWV0YVRhZ3MpKTtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKCdQaW50ZXJlc3QgYnV0dG9uOiBpbWFnZSBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQhJyk7XG4gIH1cblxuICBzaGFyZUNvdW50KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkucGludGVyZXN0LmNvbS92MS91cmxzL2NvdW50Lmpzb24/dXJsPSR7dXJsfWAsXG4gICAgICB7cmVzcG9uc2VUeXBlOiAndGV4dCd9XG4gICAgKS5waXBlKFxuICAgICAgbWFwKCh0ZXh0OiBzdHJpbmcpID0+IEpTT04ucGFyc2UodGV4dC5yZXBsYWNlKC9ecmVjZWl2ZUNvdW50XFwoKC4qKVxcKS8sICckMScpKSksXG4gICAgICBtYXAoKHJlczogYW55KSA9PiArcmVzLmNvdW50KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==