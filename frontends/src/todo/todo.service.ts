import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';
@Injectable()
export class TodoService {
    private apiUrl = environment.production ? 'https://i4q2ohoml4.execute-api.us-east-1.amazonaws.com/production/api/' : 'http://localhost:3000/api/';
    showAddTodoBox: boolean = true;
    constructor(private http: Http) { }
    getTodos(): Promise<any> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError)
    }
    getTodo(id: string): Promise<any> {
        return this.http.get(this.apiUrl + id)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError)
    }
    createTodo(todo: any): Promise<any> {
        return this.http.post(this.apiUrl, todo)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError)
    }
    updateTodo(todo: any): Promise<any> {
        return this.http
            .put(this.apiUrl, todo)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleData);
    }
    deleteTodo(todo: any): Promise<any> {
        return this.http
            .delete(this.apiUrl + todo._id)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    }
    private handleData(res: any) {
        let body = res.json();
        console.log(body); // for development purposes only
        return body || {};
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for development purposes only
        return Promise.reject(error.message || error);
    }
}