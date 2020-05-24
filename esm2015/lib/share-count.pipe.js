/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { shareCountFormatter } from './utils';
export class ShareCountPipe {
    /**
     * @param {?} num
     * @param {?=} digits
     * @return {?}
     */
    transform(num, digits) {
        return shareCountFormatter(num, digits);
    }
}
ShareCountPipe.decorators = [
    { type: Pipe, args: [{
                name: 'shareCount'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtY291bnQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1jb3VudC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFLOUMsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixTQUFTLENBQUMsR0FBVyxFQUFFLE1BQWU7UUFDcEMsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBTkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2hhcmVDb3VudEZvcm1hdHRlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzaGFyZUNvdW50J1xufSlcbmV4cG9ydCBjbGFzcyBTaGFyZUNvdW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0obnVtOiBudW1iZXIsIGRpZ2l0cz86IG51bWJlcikge1xuICAgIHJldHVybiBzaGFyZUNvdW50Rm9ybWF0dGVyKG51bSwgZGlnaXRzKTtcbiAgfVxufVxuIl19