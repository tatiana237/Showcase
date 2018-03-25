import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {ShipmentService} from "../api/shipment.service";
import {Store} from "@ngrx/store";
import {State} from "../../../app.reducers";
import * as actions from "../store/shipments/shipment-list-page/shipment-list-page.actions";
import {ShipmentListSlice} from "../store/shipments/shipment-list-page/shipment-list-page.slice";
import * as organizeFlightactions from "../store/shipments/organize-flight-page/organize-flight-page.actions";
import {RequestShipmentsFailedAction, RequestShipmentsSuccessfulAction
} from "../store/shipments/shipment-list-page/shipment-list-page.actions";
import {Observable} from "rxjs/Observable";
import {LoadShipmentSuccessfullAction} from "../store/shipments/shipment-capture-page/shipment-capture-page.actions";
import {RequestTasksForShipmentAction} from "../store/tasks/task-list-page.actions";
import {SaveFlightSuccessfultAction} from "../store/shipments/organize-flight-page/organize-flight-page.actions";
import {RequestCompletedTaskForShipmentAction} from "../store/completed-tasks/completed-task-list-page.actions";

@Injectable()
export class ShipmentListEffect {

    constructor(private _actions: Actions,
                private _shipmentService: ShipmentService,
                private _store: Store<State>) {
    }

    private lastId: string;


    @Effect() loadShipments = this._actions
          .ofType(actions.REQUEST_SHIPMENTS)
          .withLatestFrom(this._store, (action, state) => state.shipmentListSlice)
          .switchMap((shipmentListSlice: ShipmentListSlice) => {
              return this._shipmentService.findShipments();
          })
          .map(shipmentListResource => new RequestShipmentsSuccessfulAction(shipmentListResource))
          .catch(() => Observable.of(new RequestShipmentsFailedAction()));

    @Effect() loadUniqueShipment = this._actions
      .ofType(actions.REQUEST_SINGLE_SHIPMENT)
      .map((action: actions.RequestSingleShipment) => action.payload)
      .switchMap((trackingId: string) => {
        return this._shipmentService.findShipmentbyId(trackingId);
      })
      .map(shipmentListResource =>
        new LoadShipmentSuccessfullAction(shipmentListResource)
      );

    @Effect() addFLightToShipment = this._actions
      .ofType(organizeFlightactions.SAVE_FLIGHT_ACTION)
      .switchMap((action: organizeFlightactions.SaveFlightAction) => {
        this.lastId = action.trackingId;
        return this._shipmentService.addFlightToShipment(action.trackingId, action.payload);
      })
      .map(taskListSlice => new SaveFlightSuccessfultAction(taskListSlice.shipmentFlight));

    @Effect()
    loadActiveTasks = this._actions
      .ofType(organizeFlightactions.SAVE_FLIGHT_SUCCESSFUL_ACTION)
      .map((action: organizeFlightactions.SaveFlightSuccessfultAction) =>
        new RequestTasksForShipmentAction(this.lastId));

    @Effect()
    loadCompletedTasks = this._actions
      .ofType(organizeFlightactions.SAVE_FLIGHT_SUCCESSFUL_ACTION)
      .map(() =>
        new RequestCompletedTaskForShipmentAction(this.lastId));
}
