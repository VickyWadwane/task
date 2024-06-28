import { Injectable } from '@angular/core';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Vikrant Wadwane', email: 'vikrantwadwane7@gmail.com', role: 'Admin' },
    { id: 2, name: 'Steven Smith', email: 'steven@gmail.com', role: 'User' },
    { id: 3, name: 'Virat Kolhi', email: 'virat@gmail.com', role: 'User' },
    { id: 4, name: 'Rohit Sharma', email: 'rohit@gmail.com', role: 'User' },
    { id: 5, name: 'Jasprit Bumrha', email: 'jasprit@gmail.com', role: 'User' },
    { id: 6, name: 'Suryakumar Yadhav', email: 'surya@gmail.com', role: 'User' },
    { id: 7, name: 'Hardik Pandya', email: 'hardik@gmail.com', role: 'User' },
    { id: 8, name: 'MS Dhoni', email: 'dhoni@gmail.com', role: 'User' },
    { id: 9, name: 'Sachin Tendulkar', email: 'sachin@gmail.com', role: 'User' },
    { id: 10, name: 'Saurabh Ganguli', email: 'saurabh@gmail.com', role: 'User' },
    { id: 11, name: 'Rahul Dravid', email: 'rahul@gmail.com', role: 'User' },
    { id: 12, name: 'Gautam Gambhir', email: 'gautam@gmail.com', role: 'User' },

    // Add more mock users here
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  updateUser(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}