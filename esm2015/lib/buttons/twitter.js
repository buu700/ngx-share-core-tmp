/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class TwitterButton extends ShareButtonBase {
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
        this._supportedMetaTags = {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://twitter.com/intent/tweet?`;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL3R3aXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekMsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFlOzs7Ozs7Ozs7OztJQWFoRCxZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFDbkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUnhFLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBbEIzQyx1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixXQUFXLEVBQUUsTUFBTTtZQUNuQixJQUFJLEVBQUUsVUFBVTtZQUNoQixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7SUFlRixDQUFDOzs7O0lBYkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxtQ0FBbUMsQ0FBQztJQUM3QyxDQUFDO0NBWUY7Ozs7OztJQXJCQywyQ0FLRTs7Ozs7SUFNVSwrQkFBOEI7Ozs7O0lBQzlCLDZCQUE0Qjs7Ozs7SUFDNUIsOEJBQTJCOzs7OztJQUMzQixrQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2Qjs7Ozs7SUFDN0Isb0NBQTZCOzs7OztJQUM3Qiw0Q0FBeUQ7Ozs7O0lBQ3pELGdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFR3aXR0ZXJCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgdXJsOiAndXJsJyxcbiAgICBkZXNjcmlwdGlvbjogJ3RleHQnLFxuICAgIHRhZ3M6ICdoYXNodGFncycsXG4gICAgdmlhOiAndmlhJ1xuICB9O1xuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG59XG4iXX0=