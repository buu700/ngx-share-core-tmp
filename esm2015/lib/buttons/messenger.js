/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class MessengerButton extends ShareButtonBase {
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
            url: 'link'
        };
    }
    /**
     * @return {?}
     */
    get android() {
        return 'fb-messenger://share/?';
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'fb-messenger://share/?';
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2VuZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvbWVzc2VuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQWU7Ozs7Ozs7Ozs7O0lBY2xELFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQUNuRCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFSeEUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFuQjNDLHVCQUFrQixHQUFrQjtZQUM1QyxHQUFHLEVBQUUsTUFBTTtTQUNaLENBQUM7SUFtQkYsQ0FBQzs7OztJQWpCRCxJQUFJLE9BQU87UUFDVCxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7Q0FZRjs7Ozs7O0lBdEJDLDZDQUVFOzs7OztJQVVVLGlDQUE4Qjs7Ozs7SUFDOUIsK0JBQTRCOzs7OztJQUM1QixnQ0FBMkI7Ozs7O0lBQzNCLG9DQUE2Qjs7Ozs7SUFDN0Isb0NBQTZCOzs7OztJQUM3QixzQ0FBNkI7Ozs7O0lBQzdCLDhDQUF5RDs7Ozs7SUFDekQsa0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2VuZ2VyQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcblxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xuICAgIHVybDogJ2xpbmsnXG4gIH07XG5cbiAgZ2V0IGFuZHJvaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2ZiLW1lc3NlbmdlcjovL3NoYXJlLz8nO1xuICB9XG5cbiAgZ2V0IGlvcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZmItbWVzc2VuZ2VyOi8vc2hhcmUvPyc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogKHRleHQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljaywgX2xvZ2dlcik7XG4gIH1cbn1cbiJdfQ==