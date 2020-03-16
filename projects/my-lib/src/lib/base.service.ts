import { Observable } from 'rxjs';
import { of } from 'rxjs';

export class BaseService {
    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {           
            console.log(operation);
            console.error(error);
            return of(result as T);
        };
    }
}
