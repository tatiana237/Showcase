import {Component, Input, Output, EventEmitter} from "@angular/core";
import {TaskResource} from "../../shipment-common/api/resources/task.resource";
import {TerminedTaskListRowModel} from "../Container/termined-task-list-page.model";

@Component({
  selector: "educama-termined-task-list",
  templateUrl: "./termined-task-list.component.html"
})
export class terminedTaskListComponent {

  @Input()
  public TerminedTaskList: TerminedTaskListRowModel[];

  @Output()
  public selectedTask: TaskResource = new TaskResource();

  @Output()
  public taskSelectedEvent: EventEmitter<string> = new EventEmitter();

  public onRowSelect(event: Event) {
    this.taskSelectedEvent.emit(this.selectedTask.trackingId);
  }
}
