import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/interfaces/config.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConnectableObservable, tap } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-llista-minim',
  templateUrl: './llista-minim.component.html',
  styleUrls: ['./llista-minim.component.css']
})
export class LlistaMinimComponent implements OnInit {

  configurations!: Config[];
  constructor(private configSrv: ConfigService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.configSrv.getConfig()
    .pipe(
      tap((configs: Config[]) => this.configurations = configs)
    )
    .subscribe();

    
  }
  deleteOneConfig(config: Config): void {
    this.configSrv.deleteConfig(config._id!).subscribe(
      data =>  { if(data._id == config._id){
        this.configurations = this.configurations.filter(usr => usr._id != data._id)
      }}
    );
  }

  updateOneConfig(config: Config): void {
    //let newName = (<HTMLInputElement>document.getElementById("newName")).value;
    //let newEmail = (<HTMLInputElement>document.getElementById("newEmail")).value;
    console.log(config.language);
    console.log(config.letterSize);
    console.log(config.lastChange);
    const editedUser: Config = {
      _id: config._id,
      language: config.language,
      letterSize: config.letterSize,
      lastChange: config.lastChange
    } 
    this.configSrv.updateUser(editedUser, config._id!).subscribe({
      next: data => {
        console.log(data);
      }, 
      error: error => {
      console.log(error);
      }
    })
  }

}

