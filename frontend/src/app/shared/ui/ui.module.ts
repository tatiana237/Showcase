import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    AutoCompleteModule,
    BlockUIModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    PanelModule,
    TabViewModule,
    CalendarModule
} from "primeng/primeng";

@NgModule({
    imports: [CommonModule],
    exports: [
        AutoCompleteModule,
        BlockUIModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        DataTableModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        MenubarModule,
        PanelModule,
        TabViewModule,
        CalendarModule
    ]
})
export class UIModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule,
      providers: []
    };
  }
}

