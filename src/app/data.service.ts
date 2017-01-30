import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; //in app.module.ts HttpModule importieren und in imports: auflisten! Und ev. auf enableProdMode() in main.ts
//um zum Source Code einer Klasse zu gelangen: Curser drauf + F12

import { Person }  from './person.module';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise'; // wenn aus dem Observable ein Promis gemacht werden soll
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
//import 'rxjs/Rx'; // für alle Methoden von rxjs

@Injectable()
export class DataService {

   private headers = new Headers({'Content-Type': 'application/json'});
   private apiUrl = 'https://andiapi.apispark.net/v1/persons';  // URL to web api (Restlet)

   constructor(private http: Http) { } //die private Instanz http kann jetzt wie jeder andere Service verwendet werden

   //GET
   getPersons() : Observable<Person[]> { // Observables sind die "besseren" Promises (Endresultat einer asynchronen Operation) --> in data.component.ts subscribe ich bei diesem Observable, das als Rückgabewert eine Person[] verspricht
         // ...using get request
         return this.http.get(this.apiUrl)
                        // ...and calling .json() on the response to return data (sind im body)
                         .map((res:Response) => res.json()) //map wendet die Funktion auf jedes Element eines Iterable an
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    //POST
    create(person : Person): Promise<Person> {
    console.log('create called in data.service.ts');
    return this.http
      .post(this.apiUrl, {'name':person.name,'age':person.age}, {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    //PUT
    update(person : Person, personUpdate: Person) : Observable<Person> {
      console.log('update called in data.service.ts');
      const url = `${this.apiUrl}/${person.id}`;
      return this.http.put(url, JSON.stringify(personUpdate, ['name', 'age']), {headers: this.headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    //DELETE
    delete(person : Person) : Observable<Person> {
      console.log('delete called in data.service.ts');
      const url = `${this.apiUrl}/${person.id}`;
      console.log(url);
      return this.http.delete(url, {headers: this.headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}

//Ein Service kann in jeder beliebigen Komponente verwendet werden (dependency injection):
//Service kreieren: @Injectable()
//Service anwenden (siehe data.component.ts):
//1. import in component und in app.module.ts
//2. add to providers: [] (in component oder für global in app.module.ts)
//3. create private instance in constructor -> siehe data.component.ts & zweite.component.ts
