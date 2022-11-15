import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Config } from 'src/app/interfaces/config.interface';

@Component({
  selector: 'app-item-minim',
  templateUrl: './item-minim.component.html',
  styleUrls: ['./item-minim.component.css']
})
export class ItemMinimComponent implements OnInit {
  @Input() config!: Config
  @Output() deleteConfig = new EventEmitter<Config>();
  @Output() updateConfig = new EventEmitter<Config>();
  constructor() { }

  ngOnInit(): void {
  }
  delete(): void {
    this.deleteConfig.emit(this.config)
    location.reload();
  }
  update(newLanguage: string, newletterSize: string, newDate: string) {
    this.config.language = newLanguage;
    this.config.letterSize = newletterSize;
    this.config.lastChange = newDate;
    this.updateConfig.emit(this.config);
    location.reload();
  }

}
