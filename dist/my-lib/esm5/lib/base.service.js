/**
 * @fileoverview added by tsickle
 * Generated from: lib/base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    /**
     * @protected
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    BaseService.prototype.handleError = /**
     * @protected
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log(operation);
            console.error(error);
            return of((/** @type {?} */ (result)));
        });
    };
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktbGliLyIsInNvdXJjZXMiOlsibGliL2Jhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUI7SUFBQTtJQVFBLENBQUM7Ozs7Ozs7O0lBUGEsaUNBQVc7Ozs7Ozs7SUFBckIsVUFBeUIsU0FBdUIsRUFBRSxNQUFVO1FBQW5DLDBCQUFBLEVBQUEsdUJBQXVCO1FBQzVDOzs7O1FBQU8sVUFBQyxLQUFVO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLG1CQUFBLE1BQU0sRUFBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDO0lBQ04sQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHsgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cob3BlcmF0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=