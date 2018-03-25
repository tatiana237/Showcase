import {Cargo} from "../datastructures/cargo.datastructure";
import {ShipmentServices} from "../datastructures/services.datastructure";
import {Party} from "../datastructures/party.datastructure";
import {OrganizeFlightResource} from "./organize-flight.resource";
export class ShipmentResource {
    public trackingId: string;
    public uuidSender: string;
    public uuidReceiver: string;
    public sender: Party;
    public receiver: Party;
    public customerTypeEnum: string;
    public shipmentCargo: Cargo;
    public shipmentServices: ShipmentServices;
    public shipmentFlight: OrganizeFlightResource;
}
