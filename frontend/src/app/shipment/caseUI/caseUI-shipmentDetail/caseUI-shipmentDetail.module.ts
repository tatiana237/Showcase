import {SharedModule} from "../../../shared/shared.module";
import {CaseUIShipmentDetailComponent} from "./presentationals/caseUI-shipmentDetail.component";
import {CaseUIShipmentDetailPageComponent} from "./container/caseUI-shipmentDetail-page.component";
import {NgModule} from "@angular/core";
import {FieldsetModule} from "primeng/primeng";

@NgModule({
  imports: [
    SharedModule,
    FieldsetModule
  ],
  declarations: [
    CaseUIShipmentDetailComponent,
    CaseUIShipmentDetailPageComponent
  ],
  exports: [
    CaseUIShipmentDetailPageComponent
  ]
})
export class  CaseUIShipmentDetailModule {
}
