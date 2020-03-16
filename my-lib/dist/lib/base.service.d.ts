import { Observable } from 'rxjs';
export declare class BaseService {
    protected handleError<T>(operation?: string, result?: T): (error: any) => Observable<T>;
}
