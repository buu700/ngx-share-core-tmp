/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { shareCountFormatter } from './utils';
var ShareCountPipe = /** @class */ (function () {
    function ShareCountPipe() {
    }
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    ShareCountPipe.prototype.transform = /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    function (num, digits) {
        return shareCountFormatter(num, digits);
    };
    ShareCountPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'shareCount'
                },] }
    ];
    return ShareCountPipe;
}());
export { ShareCountPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtY291bnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1jb3VudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFOUM7SUFBQTtJQU9BLENBQUM7Ozs7OztJQUhDLGtDQUFTOzs7OztJQUFULFVBQVUsR0FBVyxFQUFFLE1BQWU7UUFDcEMsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBTkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO2lCQUNuQjs7SUFLRCxxQkFBQztDQUFBLEFBUEQsSUFPQztTQUpZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzaGFyZUNvdW50Rm9ybWF0dGVyIH0gZnJvbSAnLi91dGlscyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NoYXJlQ291bnQnXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQ291bnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShudW06IG51bWJlciwgZGlnaXRzPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHNoYXJlQ291bnRGb3JtYXR0ZXIobnVtLCBkaWdpdHMpO1xuICB9XG59XG4iXX0=