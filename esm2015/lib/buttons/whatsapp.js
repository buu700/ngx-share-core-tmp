/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class WhatsappButton extends ShareButtonBase {
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
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://wa.me/?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `whatsapp://send?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return `https://api.whatsapp.com/send?`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHNhcHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy93aGF0c2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7O0lBa0JqRCxZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0MsRUFDL0MsT0FBK0I7UUFDbkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUnhFLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBdkIzQyx1QkFBa0IsR0FBa0I7WUFDNUMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztJQXVCRixDQUFDOzs7O0lBckJELElBQUksT0FBTztRQUNULE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sZ0NBQWdDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFhRCxLQUFLLENBQUMsUUFBdUI7UUFDM0IsOEJBQThCO1FBQzlCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O2NBQ2xHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGOzs7Ozs7SUFqQ0MsNENBRUU7Ozs7O0lBY1UsZ0NBQThCOzs7OztJQUM5Qiw4QkFBNEI7Ozs7O0lBQzVCLCtCQUEyQjs7Ozs7SUFDM0IsbUNBQTZCOzs7OztJQUM3QixtQ0FBNkI7Ozs7O0lBQzdCLHFDQUE2Qjs7Ozs7SUFDN0IsNkNBQXlEOzs7OztJQUN6RCxpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBXaGF0c2FwcEJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XG5cbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcbiAgICBkZXNjcmlwdGlvbjogJ3RleHQnXG4gIH07XG5cbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vd2EubWUvP2A7XG4gIH1cblxuICBnZXQgYW5kcm9pZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgd2hhdHNhcHA6Ly9zZW5kP2A7XG4gIH1cblxuICBnZXQgaW9zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9sb2dnZXI6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2ssIF9sb2dnZXIpO1xuICB9XG5cbiAgY2xpY2sobWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIEFkZCB0aGUgVVJMIHRvIG1lc3NhZ2UgYm9keVxuICAgIG1ldGFUYWdzLmRlc2NyaXB0aW9uID0gbWV0YVRhZ3MuZGVzY3JpcHRpb24gPyBgJHttZXRhVGFncy5kZXNjcmlwdGlvbn1cXHJcXG4ke3RoaXMuX3VybCgpfWAgOiB0aGlzLl91cmwoKTtcbiAgICBjb25zdCBzZXJpYWxpemVkTWV0YVRhZ3MgPSB0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncyk7XG4gICAgcmV0dXJuIHRoaXMuX29wZW4oc2VyaWFsaXplZE1ldGFUYWdzKTtcbiAgfVxufVxuIl19