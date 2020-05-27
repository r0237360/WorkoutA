import { Component, OnInit } from '@angular/core';
import { WorkOutPlan } from '../Classes/workOutPlan';
import { Oefening } from '../Classes/oefening';
import { Time } from '@angular/common';


@Component({
  selector: 'app-work-out-a',
  templateUrl: './work-out-a.component.html',
  styleUrls: ['./work-out-a.component.css']
})
export class WorkOutAComponent implements OnInit {


  // Init van een plan
  plan: WorkOutPlan = new WorkOutPlan();

  // timer variabelen
  interval;
  // moet aangepast worden
  totTijd = 0;
  elapsedTime: number;
  pauze: boolean;
  begonnen: boolean;
  subtotal: number;
  total: number;

  // oefening variabelen  
  oefNum: number;
  naam: string;
  titel: string;
  beschrijving: string;
  timeLeft: number;
  pauzeTime: number;

  


  constructor() { }

  ngOnInit(){
      // Init attributen WorkOutPlan + array oefeningen
      this.plan.Naam = "MijnNieuwPlan";  
      this.plan.Titel = "Mijn Nieuw Plan";
      this.plan.RustTussenOefeningen = 3;
      // For some reason push is not working here????
      // this.plan.Oefeningen.push(new Oefening("oef1", "oefening 1", "doe oefening 1", 4));
      // this.plan.Oefeningen.push(new Oefening("oef2", "oefening 2", "doe oefening 2", 5));
      // this.plan.Oefeningen.push(new Oefening("oef3", "oefening 3", "doe oefening 3", 6));
      // this.plan.Oefeningen.push(new Oefening("oef4", "oefening 4", "doe oefening 4", 5));
      // this.plan.Oefeningen.push(new Oefening("oef5", "oefening 5", "doe oefening 5", 4));
      // this.plan.Oefeningen.push(new Oefening("oef6", "oefening 6", "doe oefening 6", 5));
      // this.plan.Oefeningen.push(new Oefening("oef7", "oefening 7", "doe oefening 7", 6));
      // this.plan.Oefeningen.push(new Oefening("oef8", "oefening 8", "doe oefening 8", 5));
      // this.plan.Oefeningen.push(new Oefening("oef9", "oefening 9", "doe oefening 9", 4));
      // this.plan.Oefeningen.push(new Oefening("oef10", "oefening 10", "doe oefening 10", 5,));

      this.plan.Oefeningen = [
        new Oefening('oef1', 'oefening 1', 'doe oefening 1', 4),
        new Oefening('oef2', 'oefening 2', 'doe oefening 2', 5),
        new Oefening('oef3', 'oefening 3', 'doe oefening 3', 4),
        new Oefening('oef4', 'oefening 4', 'doe oefening 4', 5),
        new Oefening('oef5', 'oefening 5', 'doe oefening 5', 4),
        new Oefening('oef6', 'oefening 6', 'doe oefening 6', 5),
        new Oefening('oef7', 'oefening 7', 'doe oefening 7', 4),
        new Oefening('oef8', 'oefening 8', 'doe oefening 8', 5),
        new Oefening('oef9', 'oefening 9', 'doe oefening 9', 4),
        new Oefening('oef10', 'oefening 10', 'doe oefening 10', 5),
      ];
  
      

    // Initialiseer variabelen van timer en oefening
      this.elapsedTime = 0;
      this.pauze = true;
      this.begonnen = false;
      this.oefNum = 0;
      this.timeLeft = this.plan.Oefeningen[0].tijdsduur;
      this.pauzeTime = 0;
      this.naam = 'Welkom!'
      this.titel = 'Workout app is klaar om te starten.'
      this.beschrijving = 'Druk op start om te beginnen!';
      
  }


  // Methode om oef te bepalen en ophalen gegevens uit oefarray van het plan. 
  SetOef(excerciceNumber: number): void {
    this.naam = this.plan.Oefeningen[excerciceNumber].naam;
    this.titel = this.plan.Oefeningen[excerciceNumber].titel;
    this.beschrijving = this.plan.Oefeningen[excerciceNumber].beschrijving;
    this.timeLeft = this.plan.Oefeningen[excerciceNumber].tijdsduur;
    this.pauzeTime = this.plan.RustTussenOefeningen;
    this.pauze = false;
  }

  // Starten van timer die alle handelingen beheert (nieuwe oef enz...)
  StartTimer(): void {
    this.totTijd = this.BerekenTotTijd();
    this.SetOef(this.oefNum);
    this.begonnen = true;

    this.interval = setInterval( () => {

      this.elapsedTime++;
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }

      if (this.timeLeft === 0) {
        if (this.pauzeTime === 0) {
          this.oefNum++;
          this.SetOef(this.oefNum);
          this.pauze = false;
        } else {
          this.pauze = true;
          this.pauzeTime--;
          this.naam = 'Rust'
          this.titel = 'Rust';
          this.beschrijving = 'Recuperatie tijd';
        }
      }

      if (this.elapsedTime === this.totTijd) {
        this.naam = 'Voltooid';
        this.titel = 'Voltooid ';
        this.beschrijving = 'De oefening reeks is voltooid';
        this.pauzeTime= 0;
        this.StopTimer();
      }
    }, 1000);
  }

  // Stop 
  StopTimer() {
    clearInterval(this.interval);
  }

  //Berekening van de totale tijd voor alle oef inc rust periodes
  BerekenTotTijd(): number{
     // elke duurtijd van een oefening optellen
     this.subtotal = 0;
      for (var i = 0; i < this.plan.Oefeningen.length; i++) {
      this.subtotal = this.subtotal + this.plan.Oefeningen[i].tijdsduur;
   }
 
   // subtotal + rust tussen elke oefening optellen (array lenght -1)
  return this.total = (this.plan.RustTussenOefeningen * (this.plan.Oefeningen.length - 1)) + this.subtotal;

  }

}
