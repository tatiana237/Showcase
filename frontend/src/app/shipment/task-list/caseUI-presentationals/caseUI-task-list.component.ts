import {Component, Input, Output, EventEmitter} from "@angular/core";
import {TaskListRowModel} from "../container/task-list-page.model";
import {TaskResource} from "../../shipment-common/api/resources/task.resource";

@Component({
    selector: "educama-caseui-task-list",
    templateUrl: "./caseUI-task-list.component.html"
})
export class CaseUITaskListComponent {

    @Input()
    public taskList: TaskListRowModel[];

    @Output()
    public selectedTask: TaskResource = new TaskResource();

    @Output()
    public taskSelectedEvent: EventEmitter<string> = new EventEmitter();

    public onRowSelect(event: Event) {
        this.taskSelectedEvent.emit(this.selectedTask.trackingId);
    }
}
