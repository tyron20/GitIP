import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
   
  async getUser(userName:string){
    const promise = this.http.get(`${environment.githuburl}/users/${userName}`
    );
    return await lastValueFrom(promise).then((result)=>result)
    .catch((error)=>console.log(error));

    
  }
  // https://api.github.com/users/
}
