import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PokequizService } from '../pokequiz.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router, private pokequizService: PokequizService) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.pokequizService.submitUserInformation(form.value.userName, form.value.gradeLevel);
    this.goToInstructions();
  }

  goToInstructions() {
    this.router.navigateByUrl("/instructions");
  }
}
