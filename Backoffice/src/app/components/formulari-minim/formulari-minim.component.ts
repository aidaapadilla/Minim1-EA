import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { Validators } from '@angular/forms';
import { Config } from 'src/app/interfaces/config.interface';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulari-minim',
  templateUrl: './formulari-minim.component.html',
  styleUrls: ['./formulari-minim.component.css']
})
//Aqui és on crearem la nova configuracio
export class FormulariMinimComponent implements OnInit {
  message = "";
  config!: Config;
  @Output() addConfig = new EventEmitter<Config>();
  configForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    letterSize: new FormControl('', [Validators.required]),
    lastChange: new FormControl('Wed Jan 01 2014 13:28:56 GMT', Validators.required)
  })
  constructor(private _fb: FormBuilder, private _configService: ConfigService, private router: Router) { }


  ngOnInit(): void {
  }
  onSubmit() {
    this.config = <Config>this.configForm.value;
    this._configService.addConfig(this.config).subscribe({
      next: (data) => {
        console.log(data);
        this.message = "Created!"
        this.router.navigate(['LlistaMinim']);
      },
      error: error => {
        console.log(error);
        this.message = "Error!"
      }
    })
  }

}
