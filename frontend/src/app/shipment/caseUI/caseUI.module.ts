import {LeftSideBarModule} from "./caseUI-leftSideBar/leftSideBar.module";
import {LeftSideBarComponent} from "./caseUI-leftSideBar/leftSideBar.component";
import {NgModule} from "@angular/core";
import {CaseUiComponent} from "./caseUi.component";
import {CaseUIShipmentDetailModule} from "./caseUI-shipmentDetail/caseUI-shipmentDetail.module";

@NgModule({
    imports: [
      LeftSideBarModule,
      CaseUIShipmentDetailModule
    ],
  declarations:[
    CaseUiComponent
  ],
  exports:[
    CaseUiComponent
  ]
})
export class CaseUIModule {
}
