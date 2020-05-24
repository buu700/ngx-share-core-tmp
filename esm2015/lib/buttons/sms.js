/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class SmsButton extends ShareButtonBase {
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
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'sms:&';
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add the URL to message body
        metaTags.description = metaTags.description ? `${metaTags.description}\r\n${this._url()}` : this._url();
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._disableButtonClick;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvc21zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxTQUFVLFNBQVEsZUFBZTs7Ozs7Ozs7Ozs7SUFrQjVDLFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQyxFQUMvQyxPQUErQjtRQUNuRCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFSeEUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUF2QjNDLHVCQUFrQixHQUFrQjtZQUM1QyxXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO0lBdUJGLENBQUM7Ozs7SUFyQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQWFELEtBQUssQ0FBQyxRQUF1QjtRQUMzQiw4QkFBOEI7UUFDOUIsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Y0FDbEcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7Ozs7OztJQWpDQyx1Q0FFRTs7Ozs7SUFjVSwyQkFBOEI7Ozs7O0lBQzlCLHlCQUE0Qjs7Ozs7SUFDNUIsMEJBQTJCOzs7OztJQUMzQiw4QkFBNkI7Ozs7O0lBQzdCLDhCQUE2Qjs7Ozs7SUFDN0IsZ0NBQTZCOzs7OztJQUM3Qix3Q0FBeUQ7Ozs7O0lBQ3pELDRCQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIFNtc0J1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcbiAgICBkZXNjcmlwdGlvbjogJ2JvZHknXG4gIH07XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHNtczo/YDtcbiAgfVxuXG4gIGdldCBhbmRyb2lkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBzbXM6P2A7XG4gIH1cblxuICBnZXQgaW9zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdzbXM6Jic7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogKHRleHQ6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljaywgX2xvZ2dlcik7XG4gIH1cblxuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gQWRkIHRoZSBVUkwgdG8gbWVzc2FnZSBib2R5XG4gICAgbWV0YVRhZ3MuZGVzY3JpcHRpb24gPSBtZXRhVGFncy5kZXNjcmlwdGlvbiA/IGAke21ldGFUYWdzLmRlc2NyaXB0aW9ufVxcclxcbiR7dGhpcy5fdXJsKCl9YCA6IHRoaXMuX3VybCgpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWRNZXRhVGFncyA9IHRoaXMuX3NlcmlhbGl6ZU1ldGFUYWdzKG1ldGFUYWdzKTtcbiAgICByZXR1cm4gdGhpcy5fb3BlbihzZXJpYWxpemVkTWV0YVRhZ3MpO1xuICB9XG59XG4iXX0=