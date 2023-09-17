import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl:'./card.component.html',
    styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

    title: string = 'Card title'
    text: string = 'Sample text'
    id: number = 26
    disabled:boolean = true
    imgUrl: string = 'https://sun9-31.userapi.com/impf/c636920/v636920407/4b104/qgWy1C1EpTw.jpg?size=320x320&quality=96&sign=a791819c977e127f10bf07cd63e6b753&c_uniq_tag=e2IkwMYaLgZQzIewMM_RNLJ351QUj6bFtNDWn3hfCq4&type=album'
    textColor: string = ''

    ngOnInit(): void {
        setTimeout(()=>{
            this.imgUrl = 'https://edenhotelspa.com/v2/wp-content/uploads/2018/08/Blagaj-Mostar-BIH.jpg'
            this.disabled = false
        }, 2000)
    }

    changeTitle() {
        this.title = 'New title'
    }

    ChangeHandler() {
        console.log(this.title);
    }
    // inputHandler(event: any){
    //     this.title = (event.target.value);
    // }

    // inputHandler2(value: any){
    //     this.title = (value);
    // }
}