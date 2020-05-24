/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class MixButton extends ShareButtonBase {
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
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://mix.com/add?`;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    MixButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvbWl4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxTQUFVLFNBQVEsZUFBZTs7Ozs7Ozs7Ozs7SUFVNUMsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDLEVBQy9DLE9BQStCO1FBQ25ELEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQVJ4RSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQWYzQyx1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDO0lBZUYsQ0FBQzs7OztJQWJELElBQUksT0FBTztRQUNULE9BQU8sc0JBQXNCLENBQUM7SUFDaEMsQ0FBQztDQVlGOzs7Ozs7SUFsQkMsdUNBRUU7Ozs7O0lBTVUsMkJBQThCOzs7OztJQUM5Qix5QkFBNEI7Ozs7O0lBQzVCLDBCQUEyQjs7Ozs7SUFDM0IsOEJBQTZCOzs7OztJQUM3Qiw4QkFBNkI7Ozs7O0lBQzdCLGdDQUE2Qjs7Ozs7SUFDN0Isd0NBQXlEOzs7OztJQUN6RCw0QkFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBNaXhCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xuXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XG4gICAgdXJsOiAndXJsJ1xuICB9O1xuXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL21peC5jb20vYWRkP2A7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogKHRleHQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljaywgX2xvZ2dlcik7XG4gIH1cbn1cbiJdfQ==