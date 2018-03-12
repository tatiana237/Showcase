import {Action} from "@ngrx/store";
import {TaskListResource} from "../../api/resources/task-list.resource";

// Initialize Actions
export const INITIALIZE_ENABLED_TASK_LIST = "INITIALIZE_ENABLED_TASK_LIST";

// Tasks API Actions
export const REQUEST_ENABLED_TASKS_FOR_SHIPMENT = "REQUEST_ENABLED_TASKS_FOR_SHIPMENT";
export const REQUEST_ENABLED_TASKS_SUCCESSFUL = "REQUEST_ENABLED_TASKS_SUCCESSFUL";
export const REQUEST_ENABLED_TASKS_FAILED = "REQUEST_ENABLED_TASKS_FAILED";
export const START_ENABLED_TASK = "START_ENABLED_TASK";
export const START_ENABLED_TASKS_SUCCESSFUL = "START_ENABLED_TASKS_SUCCESSFUL";

// Actions
export class InitializeEnabledTaskListAction implements Action {
  type = INITIALIZE_ENABLED_TASK_LIST;

  constructor() {
  }
}

export class RequestEnabledTasksForShipmentAction implements Action {
  type = REQUEST_ENABLED_TASKS_FOR_SHIPMENT;

  constructor(public trackingId: string) {
  }
}

export class RequestEnabledTasksSuccessfulAction implements Action {
  type = REQUEST_ENABLED_TASKS_SUCCESSFUL;

  constructor(public payload: TaskListResource) {
  }
}

export class RequestEnabledTasksFailedAction implements Action {
  type = REQUEST_ENABLED_TASKS_FAILED;

  constructor() {
  }
}

export class StartEnabledTasksSuccessfulAction implements Action {
  type = START_ENABLED_TASKS_SUCCESSFUL;

  constructor(public payload: TaskListResource) {
  }
}

export class StartEnabledTaskAction implements Action {
  type = START_ENABLED_TASK;

  constructor(public trackingId: string, public taskName: string) {
  }
}




