import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  card = { title: 'Card Title', 
           text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
           live_position:'10',
           Experience:'2-3',
           salary:'usd 1000-2000',
           Domain:'IT',
           Contact_email:'xyz@gmail.com',
           btnText: 'Go somewhere' 
         };
         
  selectedRating = 0;
  stars = [
            {
              id: 1,
              icon: 'star',
              class: 'star-gray star-hover star'
            },
          ];

    card_display= true;

    selectStar(value: number): void{  
      if ( this.selectedRating === 0){
        this.stars.filter( (star) => {
          if ( star.id <= value){
            star.class = 'star-gold star';
          }else{ 
           star.class = 'star-gray star'; 
          } 
          return star;
        });  
      }  
      this.selectedRating = value;
    }

    ShowLiveJobs(){
      this.card_display = true;
      console.log(this.card_display);
    }
}



