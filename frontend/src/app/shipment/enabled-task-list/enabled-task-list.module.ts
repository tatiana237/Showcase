import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {EnabledTaskListPageComponent} from "./container/enabled-task-list-page.component";
import {EnabledTaskListComponent} from "./presentationals/enabled-task-list.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EnabledTaskListPageComponent,
    EnabledTaskListComponent
  ],
  exports: [
    EnabledTaskListPageComponent
  ]
})
export class EnabledTaskListModule {
}
