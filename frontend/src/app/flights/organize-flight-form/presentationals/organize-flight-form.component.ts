

import {Component, OnDestroy, OnInit} from "@angular/core";
import {AirlineResource} from "../../flights-common/api/airlines/airline.resource";
import {AirportResource} from "../../flights-common/api/airports/airport.resource";
import {Observable} from "rxjs/Observable";
import {ShipmentCaptureSlice} from "../../../shipment/shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.slice";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ShipmentService} from "../../../shipment/shipment-common/api/shipment.service";
import {Store} from "@ngrx/store";
import {State} from "../../../app.reducers";
import {AirlineService} from "../../flights-common/api/airlines/airline.service";
import {AirportService} from "../../flights-common/api/airports/airport.service";
import {
  LoadShipmentAction,
  ResetShipmentCaptureSliceAction
} from "../../../shipment/shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.actions";
import {OrganizeFlightFormPageModel} from "../container/organize-flight-form-page.model";

@Component({
  selector: "educama-organize-flight-form",
  templateUrl: "./organize-flight-form.component.html",
  styleUrls: ["../organize-flight-form-style.scss"]
})
export class OrganizeFlightFormComponent implements OnInit, OnDestroy {

  public airlineSuggestion: any;
  public airportSuggestion: any;

  selectedAirline: AirlineResource;
  selectedStartAirport: AirportResource;
  selectedDestinationAirport: AirportResource;


  public shipmentDetailSlice: Observable<ShipmentCaptureSlice>;
  public shipmentDetailSliceSubscription: Subscription;

  // model for the page
  public shipmentDetailInfoModel: OrganizeFlightFormPageModel = new OrganizeFlightFormPageModel();

  constructor(private _activatedRoute: ActivatedRoute,
              private _shipmentService: ShipmentService,
              private _store: Store<State>,
              private _airlineService: AirlineService,
              private _airportService: AirportService) {

    this.shipmentDetailSlice = this._store.select(state => state.shipmentCaptureSlice);

    this.shipmentDetailSliceSubscription = this.shipmentDetailSlice.subscribe(
      shipmentCaptureSlice => this.updateShipmentCaptureModel(shipmentCaptureSlice)
    );
  }

  public ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      if (params["id"] && params["id"] !== "capture") {
        this.loadShipment(params["id"]);
      }
      console.log(params["id"]);
    });
  }

  public ngOnDestroy() {
    this._store.dispatch(new ResetShipmentCaptureSliceAction(""));
    this.shipmentDetailSliceSubscription.unsubscribe();
  }

  // ***************************************************
  // Event Handler
  // ***************************************************
  public loadAirlineSuggestions(event: any) {
    this._airlineService.findAirlineSuggestions(event.query)
      .subscribe(customerSuggestionResource => this.airlineSuggestion = customerSuggestionResource);
  }

  public loadAirportSuggestions(event: any) {
    this._airportService.findAirportSuggestions(event.query)
      .subscribe(customerSuggestionResource => this.airportSuggestion = customerSuggestionResource);
  }

  public onAirlineSelected(airline: AirlineResource) {

    this.selectedAirline = airline;
  }

  public onStartAirportSelected(airport: AirportResource) {

    this.selectedStartAirport = airport;
  }

  public onDestinationAirportSelected(airport: AirportResource) {

    this.selectedDestinationAirport = airport;
  }

  // ***************************************************
  // Data Retrieval
  // ***************************************************
  private loadShipment(trackingId: string) {
    this._shipmentService.findShipmentbyId(trackingId).subscribe(
      shipment => {
        this._store.dispatch(new LoadShipmentAction(shipment));
      }
    );
    console.log(trackingId);
  }

  private updateShipmentCaptureModel(shipmentCaptureSlice: ShipmentCaptureSlice) {
    this.shipmentDetailInfoModel.shipment = shipmentCaptureSlice.shipment;
  }

}
