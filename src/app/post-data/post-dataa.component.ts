import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-dataa',
  templateUrl: './post-dataa.component.html',
  styleUrls: ['./post-dataa.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService : HttpServerService) { }

  ngOnInit(): void {
    const payload = {"body": "Đây là message số 4","postId": 3}; //định nghĩa payload
    this.httpServerService.postComments(payload).subscribe(data => {
      console.log('postComment', data);
    });
  }
}
