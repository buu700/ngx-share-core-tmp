/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
export class FacebookButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     * @param {?} _logger
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick, _logger);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._logger = _logger;
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'u'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://www.facebook.com/sharer/sharer.php?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://graph.facebook.com?id=${url}`).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.share.share_count)));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9mYWNlYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekMsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlOzs7Ozs7Ozs7OztJQVlqRCxZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFDbkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUnhFLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBakJyRCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFZix1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDO0lBZUYsQ0FBQzs7OztJQWJELElBQUksT0FBTztRQUNULE9BQU8sNkNBQTZDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFhRCxVQUFVLENBQUMsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEUsR0FBRzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQTFCQywyQ0FBeUI7Ozs7O0lBRXpCLDRDQUVFOzs7OztJQU1VLGdDQUE4Qjs7Ozs7SUFDOUIsOEJBQTRCOzs7OztJQUM1QiwrQkFBMkI7Ozs7O0lBQzNCLG1DQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QixxQ0FBNkI7Ozs7O0lBQzdCLDZDQUF5RDs7Ozs7SUFDekQsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHN1cHBvcnRTaGFyZUNvdW50ID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ3UnXG4gIH07XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG5cbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbT9pZD0ke3VybH1gKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gK3Jlcy5zaGFyZS5zaGFyZV9jb3VudClcbiAgICApO1xuICB9XG59XG4iXX0=