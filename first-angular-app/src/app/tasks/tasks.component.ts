import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
  })

export class TasksComponent {
  @Input() name?: string;
}