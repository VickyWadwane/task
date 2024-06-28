// edit-user.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['User', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = +!this.route.snapshot.paramMap.get('id');
    const user = this.userService.getUsers().find(u => u.id === this.userId);
    if (user) {
      this.userForm.setValue({
        name: user.name,
        email: user.email,
        role: user.role
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedUser: User = { id: this.userId, ...this.userForm.value };
      this.userService.updateUser(updatedUser);
      this.router.navigate(['/users']);
    }
  }
}
