import {Component, DoCheck, Input, OnInit} from "@angular/core";
import {ShipmentResource} from "../../../shipment-common/api/resources/shipment.resource";
@Component({
  selector: "educama-caseui-shipment-detail",
  templateUrl: "./caseUI-shipmentDetail.component.html"
})
export class CaseUIShipmentDetailComponent implements OnInit {
  @Input()
  public shipment: ShipmentResource;


  constructor() {

  }

  public ngOnInit() {

  }



}
