import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {CaseUICenterAreaComponent} from "./caseUI-centerArea.component";
import {OrganizeFlightFormComponent} from "../../../flights/organize-flight-form/presentationals/organize-flight-form.component";
import {OrganizeFlightFormPageComponent} from "../../../flights/organize-flight-form/container/organize-flight-form-page.component";


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CaseUICenterAreaComponent,
    OrganizeFlightFormComponent,
    OrganizeFlightFormPageComponent
  ],
  exports: [
    CaseUICenterAreaComponent,
    OrganizeFlightFormComponent
  ]
})
export class CaseUICenterAreaModule {
}
