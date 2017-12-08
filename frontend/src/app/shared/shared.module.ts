import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ErrorModule} from "./error/error.module";
import {RestModule} from "./http/rest.module";
import {TranslationModule} from "./translation/translation.module";
import {UIModule} from "./ui/ui.module";
import {TaskListModule} from "../shipment/task-list/task-list.module";
import {EnabledTaskListComponent} from "../shipment/enabled-task-list/presentationals/enabled-task-list.component";
import {EnabledTaskListModel} from "../shipment/enabled-task-list/container/enabled-task-list-page.model";
import {EnabledTaskListModule} from "../shipment/enabled-task-list/enabled-task-list.module";

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorModule,
        RestModule,
        TranslationModule,
        UIModule,
    ]
})
export class SharedModule {
  public static forRoot(): Array<ModuleWithProviders> {
    return [
      ErrorModule.forRoot(),
      RestModule.forRoot(),
      UIModule.forRoot(),
      ...TranslationModule.forRoot()
    ];
  }
}




