import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import * as actions from "../store/shipments/organize-flight-page/organize-flight-page.actions";
import {ShipmentService} from "../api/shipment.service";
import {SaveFlightSuccessfultAction} from "../store/shipments/organize-flight-page/organize-flight-page.actions";

@Injectable()
export class TaskListEffect {
  constructor(private _actions: Actions,
              private _shipmentService: ShipmentService) {
  }

  @Effect() addFLightToShipment = this._actions
    .ofType(actions.SAVE_FLIGHT_ACTION)
    .switchMap((action: actions.SaveFlightAction) => {
      return this._shipmentService.addFlightToShipment(action.trackingId, action.payload);
    })
    .map(taskListSlice => new SaveFlightSuccessfultAction(taskListSlice.flight));


}
