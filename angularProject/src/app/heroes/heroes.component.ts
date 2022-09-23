import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  // selectedHero?: Hero;
  // , private messageService : MessageService
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

    // selectHero(hero:Hero) :void {
    //   console.log(hero)
    //   this.selectedHero = hero;
    //   this.messageService.add(`HeroesComponent : Selected Hero id:${hero.id}`);
    // }
  getHeroes(): void {
    console.log("inside get heroes");
    // this.heroes = this.heroService.getHeroes();        //when local data and no observable

    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
