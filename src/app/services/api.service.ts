import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  //function to get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
  }

  //function to view a particular contact
  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }

  //function to get a particular group name
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  //function to fetch all groups from http://localhost:3000/groups
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  //function to add new contact to server
  addContact(contactBody:any){
    return this.http.post(this.baseUrl,contactBody)
  }

  //function to delete a contact
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseUrl}/${contactId}`)
  }

  //update contact details according to user select
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
  }
}
