/**
 * @fileoverview added by tsickle
 * Generated from: lib/base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
export class BaseService {
    /**
     * @protected
     * @template T
     * @param {?=} operation
     * @param {?=} result
     * @return {?}
     */
    handleError(operation = 'operation', result) {
        return (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            console.log(operation);
            console.error(error);
            return of((/** @type {?} */ (result)));
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXktbGliLyIsInNvdXJjZXMiOlsibGliL2Jhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBQ1YsV0FBVyxDQUFJLFNBQVMsR0FBRyxXQUFXLEVBQUUsTUFBVTtRQUN4RDs7OztRQUFPLENBQUMsS0FBVSxFQUFpQixFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixPQUFPLEVBQUUsQ0FBQyxtQkFBQSxNQUFNLEVBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQztJQUNOLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4geyAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcGVyYXRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==