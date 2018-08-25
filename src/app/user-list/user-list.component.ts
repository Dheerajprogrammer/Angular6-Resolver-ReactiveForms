import { Component, OnInit } from '@angular/core';
import { UserResolverService } from "../resolver/user-resolver.service";
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public Users;
  constructor(private userList: ActivatedRoute) {

    this.userList.data.pipe(map(data => data.UserResolverList.json())).subscribe((res) => {
      this.Users = res;
      console.log(res)
    })
  }

  ngOnInit() {
    console.log('ngoninit Intiated');
  }

}
