// user-list.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.userService.getUsers());
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(DeleteUserComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(id);
        this.dataSource.data = this.userService.getUsers();
      }
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addUser() {
    this.router.navigate(['/add-user']);
  }

  editUser(user: User) {
    this.router.navigate(['/edit-user', user.id]);
  }
}
