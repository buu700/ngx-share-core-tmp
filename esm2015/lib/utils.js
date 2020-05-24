/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple object check.
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
export function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
/**
 * Returns a readable number from share count
 * @param {?} num
 * @param {?} digits
 * @return {?}
 */
export function shareCountFormatter(num, digits) {
    /** @type {?} */
    const si = [
        { value: 1E9, symbol: 'B' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'K' }
    ];
    /** @type {?} */
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
        }
    }
    return num.toFixed(digits).replace(rx, '$1');
}
/**
 * Returns a valid URL or falls back to current URL
 * @param {?} url
 * @param {?} fallbackUrl
 * @return {?}
 */
export function getValidUrl(url, fallbackUrl) {
    if (url) {
        /** @type {?} */
        const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url))
            return url;
        console.warn(`[ShareButtons]: Sharing link '${url}' is invalid!`);
    }
    return fallbackUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSTtJQUNwQixPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPO0lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQ25CLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7O1VBQ0ssTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFFOUIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3hDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztpQkFDcEM7Z0JBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQzthQUM3QztTQUNGO0tBQ0Y7SUFFRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7O0FBR0QsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEdBQVcsRUFBRSxNQUFjOztVQUV2RCxFQUFFLEdBQUc7UUFDVCxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztRQUN6QixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztRQUN6QixFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztLQUMxQjs7VUFBRSxFQUFFLEdBQUcsMEJBQTBCO0lBRWxDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUM3RTtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0MsQ0FBQzs7Ozs7OztBQUdELE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVyxFQUFFLFdBQW1CO0lBQzFELElBQUksR0FBRyxFQUFFOztjQUNELENBQUMsR0FBRywrRUFBK0U7UUFDekYsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsZUFBZSxDQUFDLENBQUM7S0FDbkU7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFNpbXBsZSBvYmplY3QgY2hlY2suKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pOiBib29sZWFuIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbi8qKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLiovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtba2V5XToge319KTtcbiAgICAgICAgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuXG4vKiogUmV0dXJucyBhIHJlYWRhYmxlIG51bWJlciBmcm9tIHNoYXJlIGNvdW50ICovXG5leHBvcnQgZnVuY3Rpb24gc2hhcmVDb3VudEZvcm1hdHRlcihudW06IG51bWJlciwgZGlnaXRzOiBudW1iZXIpOiBzdHJpbmcge1xuXG4gIGNvbnN0IHNpID0gW1xuICAgIHt2YWx1ZTogMUU5LCBzeW1ib2w6ICdCJ30sXG4gICAge3ZhbHVlOiAxRTYsIHN5bWJvbDogJ00nfSxcbiAgICB7dmFsdWU6IDFFMywgc3ltYm9sOiAnSyd9XG4gIF0sIHJ4ID0gL1xcLjArJHwoXFwuWzAtOV0qWzEtOV0pMCskLztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG51bSA+PSBzaVtpXS52YWx1ZSkge1xuICAgICAgcmV0dXJuIChudW0gLyBzaVtpXS52YWx1ZSkudG9GaXhlZChkaWdpdHMpLnJlcGxhY2UocngsICckMScpICsgc2lbaV0uc3ltYm9sO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCAnJDEnKTtcbn1cblxuLyoqIFJldHVybnMgYSB2YWxpZCBVUkwgb3IgZmFsbHMgYmFjayB0byBjdXJyZW50IFVSTCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkVXJsKHVybDogc3RyaW5nLCBmYWxsYmFja1VybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHVybCkge1xuICAgIGNvbnN0IHIgPSAvKGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcbiAgICBpZiAoci50ZXN0KHVybCkpIHJldHVybiB1cmw7XG4gICAgY29uc29sZS53YXJuKGBbU2hhcmVCdXR0b25zXTogU2hhcmluZyBsaW5rICcke3VybH0nIGlzIGludmFsaWQhYCk7XG4gIH1cbiAgcmV0dXJuIGZhbGxiYWNrVXJsO1xufVxuIl19