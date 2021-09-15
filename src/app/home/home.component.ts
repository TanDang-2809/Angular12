import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Tân Đặng';
  public age = 20;

  public counter = 0;
  public counterBinhPhuong = 0;

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
  public vietnamData = [
    { city : 'Chọn thành phô', district: ['Quận huyện']},
    {
      city: 'Tây Nguyên', 
      district: [
        'Huyện Ehaleo',
        'Thị xã Buôn Hồ',
      ],
    },
    {
      city: 'Hồ Chí Minh', 
      district: [
        'Bình Thạnh',
        'Quận 1',
        'Quận 3',
      ],
    },
    {
      city: 'Bạc Liêu', 
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện GiÁ rAI',
      ],
    },
  ];
  public districts : string[] = ['Quận huyện'];
  constructor(private common: CommonService) {}

  public ngOnInit(): void {
    console.log('trai cay' , this.traiCay);
    console.log('trai cay 2 ',this.traiCay2);
    console.log('cities', this.vietnamData);
    //service
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
   }

  public resetName() : void{ //trả về dùng void
      console.log('resetName'); //in ra
      this.name = '';
  }
  public changeCity(event: any): void {
    const city =  event.target.value;//value in ra từng tên city
    // console.log('event', city);//khi chọn thành phố sẽ in ra tên thành phố
    if(!city){// nếu không có city thì sẽ dừng và nếu có chạy tiếp dòng dưới.
      return;
    }
    // //cách 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    //cách 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }
}
