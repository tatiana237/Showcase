import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ShipmentResource} from "../../shipment-common/api/resources/shipment.resource";
import {TranslateService} from "ng2-translate";
import {Router} from "@angular/router";

@Component({
    selector: "educama-shipment-list",
    templateUrl: "./shipment-list.component.html"
})
export class ShipmentListComponent {

    @Input()
    public shipmentList: ShipmentResource[];

    @Output()
    public selectedShipment: ShipmentResource = new ShipmentResource();

    @Output()
    public shipmentSelectedEvent: EventEmitter<string> = new EventEmitter();

    public emptyListMessage: string;

    constructor(_translateService: TranslateService,
                private _router: Router) {
        _translateService.get("GENERIC_NO-RECORDS-FOUND")
            .subscribe(value => this.emptyListMessage = value);
    }

    public onRowSelect(event: Event) {
      this._router.navigate(["/caseui/" + this.selectedShipment.trackingId]);
    }

}
