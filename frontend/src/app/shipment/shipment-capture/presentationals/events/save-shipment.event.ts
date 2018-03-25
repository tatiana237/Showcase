import {Cargo} from "../../../shipment-common/api/datastructures/cargo.datastructure";
import {ShipmentServices} from "../../../shipment-common/api/datastructures/services.datastructure";
export class SaveShipmentEvent {
    trackingId?: string;
    uuidSender: string;
    uuidReceiver: string;
    shipmentCargo: Cargo;
    shipmentServices: ShipmentServices;
    customerTypeEnum: string;

    constructor(uuidSender: string, uuidReceiver: string,
                shipmentCargo: Cargo, shipmentServices: ShipmentServices, customerTypeEnum: string, trackingId: string) {
        // this.trackingId = trackingId;
        this.uuidSender = uuidSender;
        this.uuidReceiver = uuidReceiver;
        this.shipmentCargo = shipmentCargo;
        this.shipmentServices = shipmentServices;
        this.customerTypeEnum = customerTypeEnum;
        this.trackingId = trackingId;
    }
}
