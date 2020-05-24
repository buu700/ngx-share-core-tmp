/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CopyButton, EmailButton, FacebookButton, GooglePlusButton, LineButton, LinkedinButton, MessengerButton, MixButton, PinterestButton, PrintButton, RedditButton, SmsButton, TelegramButton, TumblrButton, TwitterButton, VkButton, WhatsappButton, XingButton } from './buttons';
/**
 * Default share buttons properties
 * @type {?}
 */
export const SHARE_BUTTONS = {
    facebook: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new FacebookButton(a, b, c, d, e, f, g, h)),
        text: 'Facebook',
        icon: ['fab', 'facebook-f'],
        color: '#4267B2',
        ariaLabel: 'Share on Facebook'
    },
    twitter: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new TwitterButton(a, b, c, d, e, f, g, h)),
        text: 'Twitter',
        icon: ['fab', 'twitter'],
        color: '#00acee',
        ariaLabel: 'Share on Twitter'
    },
    linkedin: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new LinkedinButton(a, b, c, d, e, f, g, h)),
        text: 'LinkedIn',
        icon: ['fab', 'linkedin-in'],
        color: '#006fa6',
        ariaLabel: 'Share on LinkedIn'
    },
    google: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new GooglePlusButton(a, b, c, d, e, f, g, h)),
        text: 'Google+',
        icon: ['fab', 'google-plus-g'],
        color: '#DB4437',
        ariaLabel: 'Share on Google plus'
    },
    pinterest: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new PinterestButton(a, b, c, d, e, f, g, h)),
        text: 'Pinterest',
        icon: ['fab', 'pinterest-p'],
        color: '#BD091D',
        ariaLabel: 'Share on Pinterest'
    },
    reddit: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new RedditButton(a, b, c, d, e, f, g, h)),
        text: 'Reddit',
        icon: ['fab', 'reddit-alien'],
        color: '#FF4006',
        ariaLabel: 'Share on Reddit'
    },
    tumblr: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new TumblrButton(a, b, c, d, e, f, g, h)),
        text: 'Tumblr',
        icon: ['fab', 'tumblr'],
        color: '#36465D',
        ariaLabel: 'Share on Tumblr'
    },
    mix: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new MixButton(a, b, c, d, e, f, g, h)),
        text: 'Mix',
        icon: ['fab', 'mix'],
        color: '#ff8226',
        ariaLabel: 'Share on Mix'
    },
    vk: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new VkButton(a, b, c, d, e, f, g, h)),
        text: 'VKontakte',
        icon: ['fab', 'vk'],
        color: '#4C75A3',
        ariaLabel: 'Share on VKontakte'
    },
    telegram: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new TelegramButton(a, b, c, d, e, f, g, h)),
        text: 'Telegram',
        icon: ['fab', 'telegram-plane'],
        color: '#0088cc',
        ariaLabel: 'Share on Telegram'
    },
    messenger: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new MessengerButton(a, b, c, d, e, f, g, h)),
        text: 'Messenger',
        icon: ['fab', 'facebook-messenger'],
        color: '#0080FF',
        ariaLabel: 'Share on Messenger'
    },
    whatsapp: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new WhatsappButton(a, b, c, d, e, f, g, h)),
        text: 'WhatsApp',
        icon: ['fab', 'whatsapp'],
        color: '#25D366',
        ariaLabel: 'Share on WhatsApp'
    },
    xing: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new XingButton(a, b, c, d, e, f, g, h)),
        text: 'Xing',
        icon: ['fab', 'xing'],
        color: '#006567',
        ariaLabel: 'Share on Xing'
    },
    line: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new LineButton(a, b, c, d, e, f, g, h)),
        text: 'Line',
        icon: ['fab', 'line'],
        color: '#00b900',
        ariaLabel: 'Share on Line'
    },
    sms: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new SmsButton(a, b, c, d, e, f, g, h)),
        text: 'SMS',
        icon: 'comment-alt',
        color: '#20c16c',
        ariaLabel: 'Share link via SMS'
    },
    email: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new EmailButton(a, b, c, d, e, f, g, h)),
        text: 'Email',
        icon: 'envelope',
        color: '#FF961C',
        ariaLabel: 'Share link via email'
    },
    print: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new PrintButton(a, b, c, d, e, f, g, h)),
        text: 'Print',
        icon: 'print',
        color: '#765AA2',
        ariaLabel: 'Print page'
    },
    copy: {
        create: (/**
         * @param {?} a
         * @param {?} b
         * @param {?} c
         * @param {?} d
         * @param {?} e
         * @param {?} f
         * @param {?} g
         * @param {?} h
         * @return {?}
         */
        (a, b, c, d, e, f, g, h) => new CopyButton(a, b, c, d, e, f, g, h)),
        text: 'Copy link',
        icon: 'link',
        color: '#607D8B',
        ariaLabel: 'Copy link',
        extra: {
            successLabel: 'Copied',
            successIcon: 'check'
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmUuZGVmYXVsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLGNBQWMsRUFDZCxlQUFlLEVBQ2YsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsRUFDYixRQUFRLEVBQ1IsY0FBYyxFQUNkLFVBQVUsRUFDWCxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFPbkIsTUFBTSxPQUFPLGFBQWEsR0FBa0I7SUFDMUMsUUFBUSxFQUFFO1FBQ1IsTUFBTTs7Ozs7Ozs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM5RSxJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO1FBQzNCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7S0FDL0I7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNOzs7Ozs7Ozs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFB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Q3pCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7S0FDL0I7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNOzs7Ozs7Ozs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzFFLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztRQUNyQixLQUFLLEVBQUUsU0FBUztRQUNoQixTQUFTLEVBQUUsZUFBZTtLQUMzQjtJQUNELElBQUksRUFBRTtRQUNKLE1BQU07Ozs7Ozs7Ozs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDMUUsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQ3JCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxlQUFlO0tBQzNCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsTUFBTTs7Ozs7Ozs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6RSxJQUFJLEVBQUUsS0FBSztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxvQkFBb0I7S0FDaEM7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNOzs7Ozs7Ozs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNFLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsU0FBUyxFQUFFLHNCQUFzQjtLQUNsQztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU07Ozs7Ozs7Ozs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0UsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxZQUFZO0tBQ3hCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osTUFBTTs7Ozs7Ozs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMxRSxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLEtBQUssRUFBRTtZQUNMLFlBQVksRUFBRSxRQUFRO1lBQ3RCLFdBQVcsRUFBRSxPQUFPO1NBQ3JCO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvcHlCdXR0b24sXG4gIEVtYWlsQnV0dG9uLFxuICBGYWNlYm9va0J1dHRvbixcbiAgR29vZ2xlUGx1c0J1dHRvbixcbiAgTGluZUJ1dHRvbixcbiAgTGlua2VkaW5CdXR0b24sXG4gIE1lc3NlbmdlckJ1dHRvbixcbiAgTWl4QnV0dG9uLFxuICBQaW50ZXJlc3RCdXR0b24sXG4gIFByaW50QnV0dG9uLFxuICBSZWRkaXRCdXR0b24sXG4gIFNtc0J1dHRvbixcbiAgVGVsZWdyYW1CdXR0b24sXG4gIFR1bWJsckJ1dHRvbixcbiAgVHdpdHRlckJ1dHRvbixcbiAgVmtCdXR0b24sXG4gIFdoYXRzYXBwQnV0dG9uLFxuICBYaW5nQnV0dG9uXG59IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBJU2hhcmVCdXR0b25zIH0gZnJvbSAnLi9zaGFyZS5tb2RlbHMnO1xuXG5cbi8qKlxuICogRGVmYXVsdCBzaGFyZSBidXR0b25zIHByb3BlcnRpZXNcbiAqL1xuZXhwb3J0IGNvbnN0IFNIQVJFX0JVVFRPTlM6IElTaGFyZUJ1dHRvbnMgPSB7XG4gIGZhY2Vib29rOiB7XG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgPT4gbmV3IEZhY2Vib29rQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdGYWNlYm9vaycsXG4gICAgaWNvbjogWydmYWInLCAnZmFjZWJvb2stZiddLFxuICAgIGNvbG9yOiAnIzQyNjdCMicsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gRmFjZWJvb2snXG4gIH0sXG4gIHR3aXR0ZXI6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgVHdpdHRlckJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnVHdpdHRlcicsXG4gICAgaWNvbjogWydmYWInLCAndHdpdHRlciddLFxuICAgIGNvbG9yOiAnIzAwYWNlZScsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gVHdpdHRlcidcbiAgfSxcbiAgbGlua2VkaW46IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgTGlua2VkaW5CdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZywgaCksXG4gICAgdGV4dDogJ0xpbmtlZEluJyxcbiAgICBpY29uOiBbJ2ZhYicsICdsaW5rZWRpbi1pbiddLFxuICAgIGNvbG9yOiAnIzAwNmZhNicsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gTGlua2VkSW4nXG4gIH0sXG4gIGdvb2dsZToge1xuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpID0+IG5ldyBHb29nbGVQbHVzQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdHb29nbGUrJyxcbiAgICBpY29uOiBbJ2ZhYicsICdnb29nbGUtcGx1cy1nJ10sXG4gICAgY29sb3I6ICcjREI0NDM3JyxcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBHb29nbGUgcGx1cydcbiAgfSxcbiAgcGludGVyZXN0OiB7XG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgPT4gbmV3IFBpbnRlcmVzdEJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnUGludGVyZXN0JyxcbiAgICBpY29uOiBbJ2ZhYicsICdwaW50ZXJlc3QtcCddLFxuICAgIGNvbG9yOiAnI0JEMDkxRCcsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gUGludGVyZXN0J1xuICB9LFxuICByZWRkaXQ6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgUmVkZGl0QnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdSZWRkaXQnLFxuICAgIGljb246IFsnZmFiJywgJ3JlZGRpdC1hbGllbiddLFxuICAgIGNvbG9yOiAnI0ZGNDAwNicsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gUmVkZGl0J1xuICB9LFxuICB0dW1ibHI6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgVHVtYmxyQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdUdW1ibHInLFxuICAgIGljb246IFsnZmFiJywgJ3R1bWJsciddLFxuICAgIGNvbG9yOiAnIzM2NDY1RCcsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gVHVtYmxyJ1xuICB9LFxuICBtaXg6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgTWl4QnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdNaXgnLFxuICAgIGljb246IFsnZmFiJywgJ21peCddLFxuICAgIGNvbG9yOiAnI2ZmODIyNicsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gTWl4J1xuICB9LFxuICB2azoge1xuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpID0+IG5ldyBWa0J1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnVktvbnRha3RlJyxcbiAgICBpY29uOiBbJ2ZhYicsICd2ayddLFxuICAgIGNvbG9yOiAnIzRDNzVBMycsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gVktvbnRha3RlJ1xuICB9LFxuICB0ZWxlZ3JhbToge1xuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpID0+IG5ldyBUZWxlZ3JhbUJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnVGVsZWdyYW0nLFxuICAgIGljb246IFsnZmFiJywgJ3RlbGVncmFtLXBsYW5lJ10sXG4gICAgY29sb3I6ICcjMDA4OGNjJyxcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBUZWxlZ3JhbSdcbiAgfSxcbiAgbWVzc2VuZ2VyOiB7XG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgPT4gbmV3IE1lc3NlbmdlckJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnTWVzc2VuZ2VyJyxcbiAgICBpY29uOiBbJ2ZhYicsICdmYWNlYm9vay1tZXNzZW5nZXInXSxcbiAgICBjb2xvcjogJyMwMDgwRkYnLFxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIG9uIE1lc3NlbmdlcidcbiAgfSxcbiAgd2hhdHNhcHA6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgV2hhdHNhcHBCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZywgaCksXG4gICAgdGV4dDogJ1doYXRzQXBwJyxcbiAgICBpY29uOiBbJ2ZhYicsICd3aGF0c2FwcCddLFxuICAgIGNvbG9yOiAnIzI1RDM2NicsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gV2hhdHNBcHAnXG4gIH0sXG4gIHhpbmc6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgWGluZ0J1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnWGluZycsXG4gICAgaWNvbjogWydmYWInLCAneGluZyddLFxuICAgIGNvbG9yOiAnIzAwNjU2NycsXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gWGluZydcbiAgfSxcbiAgbGluZToge1xuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpID0+IG5ldyBMaW5lQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdMaW5lJyxcbiAgICBpY29uOiBbJ2ZhYicsICdsaW5lJ10sXG4gICAgY29sb3I6ICcjMDBiOTAwJyxcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBMaW5lJ1xuICB9LFxuICBzbXM6IHtcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA9PiBuZXcgU21zQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdTTVMnLFxuICAgIGljb246ICdjb21tZW50LWFsdCcsXG4gICAgY29sb3I6ICcjMjBjMTZjJyxcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBsaW5rIHZpYSBTTVMnXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgPT4gbmV3IEVtYWlsQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpLFxuICAgIHRleHQ6ICdFbWFpbCcsXG4gICAgaWNvbjogJ2VudmVsb3BlJyxcbiAgICBjb2xvcjogJyNGRjk2MUMnLFxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIGxpbmsgdmlhIGVtYWlsJ1xuICB9LFxuICBwcmludDoge1xuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpID0+IG5ldyBQcmludEJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSxcbiAgICB0ZXh0OiAnUHJpbnQnLFxuICAgIGljb246ICdwcmludCcsXG4gICAgY29sb3I6ICcjNzY1QUEyJyxcbiAgICBhcmlhTGFiZWw6ICdQcmludCBwYWdlJ1xuICB9LFxuICBjb3B5OiB7XG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgPT4gbmV3IENvcHlCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZywgaCksXG4gICAgdGV4dDogJ0NvcHkgbGluaycsXG4gICAgaWNvbjogJ2xpbmsnLFxuICAgIGNvbG9yOiAnIzYwN0Q4QicsXG4gICAgYXJpYUxhYmVsOiAnQ29weSBsaW5rJyxcbiAgICBleHRyYToge1xuICAgICAgc3VjY2Vzc0xhYmVsOiAnQ29waWVkJyxcbiAgICAgIHN1Y2Nlc3NJY29uOiAnY2hlY2snXG4gICAgfVxuICB9LFxufTtcbiJdfQ==