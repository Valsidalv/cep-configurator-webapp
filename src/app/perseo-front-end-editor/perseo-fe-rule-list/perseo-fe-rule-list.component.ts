import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'perseo-fe-rule-list',
  templateUrl: './perseo-fe-rule-list.component.html',
  styleUrls: ['./perseo-fe-rule-list.component.css']
})
export class PerseoFeRuleListComponent implements OnInit, OnChanges {

  rules;
  @Input() engineId;
  @Input() trigger;
  @Output() triggerChange = new EventEmitter();

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
    this.updateRulesList();
  }

  ngOnChanges() {
    this.updateRulesList();
  }

  private updateRulesList() {
    this.service.getRules(this.engineId).subscribe(
      (data) => {this.rules = data}
    );
  }

  triggerSelf() {
    console.log('triggered' + this.trigger);
    this.trigger = !this.trigger;
    this.triggerChange.emit(this.trigger);
  }

}