import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get('https://libmean.herokuapp.com/authors');
  }

  singleAuthor(id){
    return this.http.get('https://libmean.herokuapp.com/authors/single', {
      params:{ i: id }
    });
  }

  deleteAuthor(id:any){
    return this.http.delete('https://libmean.herokuapp.com/authors/remove/'+id)
    .subscribe(data=>{console.log(data)})
  }

  newAuthor(item){
    return this.http.post('https://libmean.herokuapp.com/addauthor', {'author':item})
    .subscribe(data =>{console.log(data)})
  }

  updateAuthor(id:any,item){
    return this.http.post('https://libmean.herokuapp.com/authors/update/'+id,{'author':item})
    .subscribe(data=>{console.log(data)})
  }

}
