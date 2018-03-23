import {ActionReducer, Action} from "@ngrx/store";
import * as actions from "./shipment-capture-page.actions";
import {SHIPMENT_CAPTURE_SLICE_INITIAL_STATE} from "./shipment-capture-page.initial-state";
import {ShipmentCaptureSlice} from "./shipment-capture-page.slice";

export function shipmentCapturePageReducer(state: ShipmentCaptureSlice = SHIPMENT_CAPTURE_SLICE_INITIAL_STATE,
                                           action: Action): ShipmentCaptureSlice {
    switch (action.type) {
        case actions.LOAD_SHIPMENT_SUCCESSFULL:
            const loadShipment = action as actions.LoadShipmentSuccessfullAction;
            return Object.assign({}, state, {
                shipment: loadShipment.payload
            });
        case actions.RESET_SHIPMENT_CAPTURE_SLICE:
            return SHIPMENT_CAPTURE_SLICE_INITIAL_STATE;
        case actions.UPDATE_SHIPMENT_SUCCESSFULL:
            const updateShipmentSuccessfull = action as actions.UpdateShipmentSucessfullAction;
            return Object.assign({}, state, {
              shipment: loadShipment.payload
            });
        default:
            return state;
    }
}

export const SHIPMENT_CAPTURE_PAGE_REDUCER: ActionReducer<ShipmentCaptureSlice> = shipmentCapturePageReducer;
