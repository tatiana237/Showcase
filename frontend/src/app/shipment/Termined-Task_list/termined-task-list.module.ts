import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {terminedTaskListPageComponent} from "./Container/termined-task-list-page.component";
import {terminedTaskListComponent} from "./Presentaionals/termined-task-list.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    terminedTaskListPageComponent,
    terminedTaskListComponent

  ],
  exports: [
    terminedTaskListPageComponent
  ]
})
export class TerminedTaskListModule {
}
