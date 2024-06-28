// add-user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['User', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      newUser.id = Math.max(...this.userService.getUsers().map(u => u.id)) + 1;
      this.userService.addUser(newUser);
      this.router.navigate(['/users']);
    }
  }
}
