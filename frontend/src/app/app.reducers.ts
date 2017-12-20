import {ActionReducerMap} from "@ngrx/store";
import {SHIPMENT_LIST_PAGE_REDUCER} from "./shipment/shipment-common/store/shipments/shipment-list-page.reducer";
import {TASK_LIST_PAGE_REDUCER} from "./shipment/shipment-common/store/tasks/task-list-page.reducer";
import {CUSTOMER_LIST_PAGE_REDUCER} from "./customer/customer-common/store/customer-list-page.reducer";
import {CUSTOMER_CAPTURE_PAGE_REDUCER} from "./customer/customer-common/store/customer-capture-page.reducer";
import {CustomerListSlice} from "./customer/customer-common/store/customer-list-page.slice";
import {CUSTOMER_LIST_SLICE_INITIAL_STATE} from "./customer/customer-common/store/customer-list-page.initial-state";
import {CustomerCaptureSlice} from "./customer/customer-common/store/customer-capture-page.slice";
import {CUSTOMER_CAPTURE_SLICE_INITIAL_STATE} from "./customer/customer-common/store/customer-capture-page.initial-state";
import {ERROR_REDUCER} from "./shared/error/store/error.reducer";
import {ERROR_SLICE_INITIAL_STATE} from "./shared/error/store/error.initial-state";
import {ErrorSlice} from "./shared/error/store/error.slice";
import {SHIPMENT_CAPTURE_PAGE_REDUCER} from "./shipment/shipment-common/store/shipments/shipment-capture-page.reducer";
import {ShipmentListSlice} from "./shipment/shipment-common/store/shipments/shipment-list-page.slice";
import {TaskListSlice} from "./shipment/shipment-common/store/tasks/task-list-page.slice";
import {ShipmentCaptureSlice} from "./shipment/shipment-common/store/shipments/shipment-capture-page.slice";
import {TASK_LIST_SLICE_INITIAL_STATE} from "./shipment/shipment-common/store/tasks/task-list-page.initial-state";
import {SHIPMENT_LIST_SLICE_INITIAL_STATE} from "./shipment/shipment-common/store/shipments/shipment-list-page.initial-state";
import {SHIPMENT_CAPTURE_SLICE_INITIAL_STATE} from "./shipment/shipment-common/store/shipments/shipment-capture-page.initial-state";
import {EnabledTaskListSlice} from "./shipment/shipment-common/store/enbaled-tasks/enabled-task-list-page.slice";
import {ENABLED_TASK_LIST_SLICE_INITIAL_STATE} from "./shipment/shipment-common/store/enbaled-tasks/enabled-task-list-page.initial-state";
import {ENABLED_TASK_LIST_PAGE_REDUCER} from "./shipment/shipment-common/store/enbaled-tasks/enabled-task-list-page.reducer";
import {AirlineSlice} from "./flights/flights-common/store/airlines/airlines.slice";
import {AirportSlice} from "./flights/flights-common/store/airports/airports.slice";
import {AIRLINE_SLICE_INITIAL_STATE} from "./flights/flights-common/store/airlines/airlines.initial-state";
import {AIRPORT_SLICE_INITIAL_STATE} from "./flights/flights-common/store/airports/airports.initial-state";
import {AIRPORT_REDUCER} from "./flights/flights-common/store/airports/airports.reducer";
import {AIRLINE_REDUCER} from "./flights/flights-common/store/airlines/airlines.reducer";
import {TerminedTaskListSlice} from "./shipment/shipment-common/store/Termined-tasks/termined-task-list-page.slice";
import {TERMINED_TASK_LIST_SLICE_INITIAL_STATE} from "./shipment/shipment-common/store/Termined-tasks/termined-task-list-page.initial-state";
import {TERMINED_TASK_LIST_PAGE_REDUCER} from "./shipment/shipment-common/store/Termined-tasks/termined-task-list-page.reducer";

export interface State {
  shipmentListSlice: ShipmentListSlice;
  taskListSlice: TaskListSlice;
  terminedTaskListSlice: TerminedTaskListSlice;
  customerListSlice: CustomerListSlice;
  enabledTaskListSlice: EnabledTaskListSlice;
  customerCaptureSlice: CustomerCaptureSlice;
  errorSlice: ErrorSlice;
  shipmentCaptureSlice: ShipmentCaptureSlice;
  airportSlice: AirportSlice;
  airlineSlice: AirlineSlice;
}

export const INITIAL_STATE = {
  shipmentListSlice: SHIPMENT_LIST_SLICE_INITIAL_STATE,
  taskListSlice: TASK_LIST_SLICE_INITIAL_STATE,
  TerminedTaskListSlice: TERMINED_TASK_LIST_SLICE_INITIAL_STATE,
  customerListSlice: CUSTOMER_LIST_SLICE_INITIAL_STATE,
  enabledTaskListSlice: ENABLED_TASK_LIST_SLICE_INITIAL_STATE,
  customerCaptureSlice: CUSTOMER_CAPTURE_SLICE_INITIAL_STATE,
  errorSlice: ERROR_SLICE_INITIAL_STATE,
  shipmentCaptureSlice: SHIPMENT_CAPTURE_SLICE_INITIAL_STATE,
  airportSlice: AIRPORT_SLICE_INITIAL_STATE,
  airlineSlice: AIRLINE_SLICE_INITIAL_STATE
};

export const reducers: ActionReducerMap<State> = {
  shipmentListSlice: SHIPMENT_LIST_PAGE_REDUCER,
  enabledTaskListSlice: ENABLED_TASK_LIST_PAGE_REDUCER,
  taskListSlice: TASK_LIST_PAGE_REDUCER,
  terminedTaskListSlice: TERMINED_TASK_LIST_PAGE_REDUCER,
  customerListSlice: CUSTOMER_LIST_PAGE_REDUCER,
  customerCaptureSlice: CUSTOMER_CAPTURE_PAGE_REDUCER,
  errorSlice: ERROR_REDUCER,
  shipmentCaptureSlice: SHIPMENT_CAPTURE_PAGE_REDUCER,
  airportSlice: AIRPORT_REDUCER,
  airlineSlice: AIRLINE_REDUCER
};
