/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
export class TumblrButton extends ShareButtonBase {
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
            url: 'canonicalUrl',
            description: 'caption',
            tags: 'tags'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://tumblr.com/widgets/share/tool?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.jsonp(`https://api.tumblr.com/v2/share/stats?url=${url}`, 'callback').pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => +res.response.note_count)));
    }
}
if (false) {
    /** @type {?} */
    TumblrButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    TumblrButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYmxyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvdHVtYmxyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7O0lBYy9DLFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQUNuRCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFSeEUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFuQnJELHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUVmLHVCQUFrQixHQUFrQjtZQUM1QyxHQUFHLEVBQUUsY0FBYztZQUNuQixXQUFXLEVBQUUsU0FBUztZQUN0QixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7SUFlRixDQUFDOzs7O0lBYkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyx1Q0FBdUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQWFELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQ3JCLDZDQUE2QyxHQUFHLEVBQUUsRUFDbEQsVUFBVSxDQUNYLENBQUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxDQUM1QyxDQUFDO0lBQ0osQ0FBQztDQUNGOzs7SUEvQkMseUNBQXlCOzs7OztJQUV6QiwwQ0FJRTs7Ozs7SUFNVSw4QkFBOEI7Ozs7O0lBQzlCLDRCQUE0Qjs7Ozs7SUFDNUIsNkJBQTJCOzs7OztJQUMzQixpQ0FBNkI7Ozs7O0lBQzdCLGlDQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QiwyQ0FBeUQ7Ozs7O0lBQ3pELCtCQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFR1bWJsckJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgc3VwcG9ydFNoYXJlQ291bnQgPSB0cnVlO1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgdXJsOiAnY2Fub25pY2FsVXJsJyxcbiAgICBkZXNjcmlwdGlvbjogJ2NhcHRpb24nLFxuICAgIHRhZ3M6ICd0YWdzJ1xuICB9O1xuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwOi8vdHVtYmxyLmNvbS93aWRnZXRzL3NoYXJlL3Rvb2w/YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfbG9nZ2VyOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrLCBfbG9nZ2VyKTtcbiAgfVxuXG4gIHNoYXJlQ291bnQodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmpzb25wKFxuICAgICAgYGh0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvc2hhcmUvc3RhdHM/dXJsPSR7dXJsfWAsXG4gICAgICAnY2FsbGJhY2snXG4gICAgKS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gK3Jlcy5yZXNwb25zZS5ub3RlX2NvdW50KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==