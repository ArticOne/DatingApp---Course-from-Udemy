import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  currentUser: User;
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService.currentUser$.pipe(take(1)).subscribe((user) => {
      this.currentUser = user;
    });
    if (this.currentUser) {
      this.router.navigateByUrl('/members');
    }
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
