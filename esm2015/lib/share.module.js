/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { ShareDirective } from './share-button.directive';
import { ShareCountPipe } from './share-count.pipe';
import { SHARE_BUTTONS_CONFIG } from './share.models';
export class ShareModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ShareModule,
            providers: [
                { provide: SHARE_BUTTONS_CONFIG, useValue: config }
            ]
        };
    }
}
ShareModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    PlatformModule
                ],
                declarations: [
                    ShareDirective,
                    ShareCountPipe
                ],
                exports: [
                    ShareDirective,
                    ShareCountPipe
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NoYXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFzQixNQUFNLGdCQUFnQixDQUFDO0FBZTFFLE1BQU0sT0FBTyxXQUFXOzs7OztJQUN0QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQTJCO1FBQzNDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQzthQUNsRDtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFyQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsY0FBYztpQkFDZjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuaW1wb3J0IHsgU2hhcmVEaXJlY3RpdmUgfSBmcm9tICcuL3NoYXJlLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2hhcmVDb3VudFBpcGUgfSBmcm9tICcuL3NoYXJlLWNvdW50LnBpcGUnO1xuaW1wb3J0IHsgU0hBUkVfQlVUVE9OU19DT05GSUcsIFNoYXJlQnV0dG9uc0NvbmZpZyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFBsYXRmb3JtTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNoYXJlRGlyZWN0aXZlLFxuICAgIFNoYXJlQ291bnRQaXBlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaGFyZURpcmVjdGl2ZSxcbiAgICBTaGFyZUNvdW50UGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlTW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnPzogU2hhcmVCdXR0b25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogU0hBUkVfQlVUVE9OU19DT05GSUcsIHVzZVZhbHVlOiBjb25maWd9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19