import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,private messageService : MessageService) { }

  // getHeroes(): Hero[] {   //data from local memory
  //   return HEROES;
  // }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**Get heroes from local data */
  // getHeroes(): Observable<Hero[]> {
  // const heroes = of(HEROES);      this is method when local data
  //this.messageService.add("HeroService: fetched heroes")
  //return heroes;
  // }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl)
            .pipe(
              tap(_ => this.log('fetched heroes')),
              catchError(this.handleError<Hero[]>('getHeroes',[]))
            );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero:Hero) : Observable<any>{
    return this.http.put(this.heroUrl,hero,this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('update Hero'))
    );
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroUrl,hero,this.httpOptions).pipe(
      tap((newHero: Hero): void => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('add hero'))
    );
  }

  deleteHero(id:number): Observable<Hero>{
    return this.http.delete<any>(`${this.heroUrl}/?${id}`,this.httpOptions).pipe(
      tap((_ => this.log(`deleted hero id=${id}`))),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searcheroes(term:string):Observable<any>{
    if(!term){
      return of([])
    }
    return this.http.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
      tap( x => x.length ? 
        this.log(`found heroes matcching term "${term}"`): this.log(`didn't find the heroes`)),
      catchError(this.handleError<Hero>('search hero'))
    );
  }

  
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
