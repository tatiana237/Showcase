import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {TaskListModule} from "../../task-list/task-list.module";
import {CaseUIModule} from "../caseUI.module";
import {EnabledTaskListModule} from "../../enabled-task-list/enabled-task-list.module";
import {LeftSideBarComponent} from "./leftSideBar.component";

@NgModule({
  imports: [
    SharedModule,
    TaskListModule,
    EnabledTaskListModule
  ],
  declarations: [
    LeftSideBarComponent
  ],
  exports: [
    LeftSideBarComponent
  ]
})
export class LeftSideBarModule {
}
