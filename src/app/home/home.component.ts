import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Tân Đặng';
  public age = 20;

  public traiCay = ['táo', 'nho', 'đu đủ', 'ổi'];
  public traiCay2 = [
    {
      name : 'Táo',
      price : -3,
      discount : true
    },
    {
      name : 'Dưa Hấu',
      price : 30,
      discount : false
    },
    {
      name : 'Đu Đủ',
      price : 10,
      discount : true
    },
    {
      name : 'cafe',
      price : 20,
      discount : false
    },
  ];
  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay' , this.traiCay);
    console.log(this.traiCay2);
   }

  public resetName() : void{ //trả về dùng void
      console.log('resetName'); //in ra
      this.name = '';
  }

}
