import {NgModule} from "@angular/core";
import {TaskListPageComponent} from "./container/task-list-page.component";
import {TaskListComponent} from "./presentationals/task-list.component";
import {CaseUITaskListComponent} from "./caseUI-presentationals/caseUI-task-list.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TaskListPageComponent,
    TaskListComponent,
    CaseUITaskListComponent
  ],
  exports: [
    TaskListPageComponent
  ]
})
export class TaskListModule {
}
