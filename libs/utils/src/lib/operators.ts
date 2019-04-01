import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { deserialize as jsonDeserialize } from 'typescript-json-serializer';

export function deserializeArray<T>(model: any) {
  return (source: Observable<any[]>) => {
    return source.pipe(map<any[], T[]>(items => items.map(item => jsonDeserialize(item, model))));
  };
}

export function deserialize<T>(model: any) {
  return (source: Observable<any>) => {
    return source.pipe(map<any, T[]>(item => jsonDeserialize(item, model)));
  };
}
