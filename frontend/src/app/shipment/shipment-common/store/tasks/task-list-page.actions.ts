import {Action} from "@ngrx/store";
import {TaskListResource} from "../../api/resources/task-list.resource";

// Initialize Actions
export const INITIALIZE_TASK_LIST = "INITIALIZE_TASK_LIST";

// Tasks API Actions
export const REQUEST_TASKS = "REQUEST_TASKS";
export const REQUEST_TASKS_SUCCESSFUL = "REQUEST_TASKS_SUCCESSFUL";
export const REQUEST_TASKS_FAILED = "REQUEST_TASKS_FAILED";
export const REQUEST_TASKS_FOR_SHIPMENT = "REQUEST_TASKS_FOR_SHIPMENT";

// Actions
export class InitializeTaskListAction implements Action {
  type = INITIALIZE_TASK_LIST;

  constructor() {
  }
}

export class RequestTasksAction implements Action {
  type = REQUEST_TASKS;

  constructor() {
  }
}

export class RequestTasksForShipmentAction implements Action {
  type = REQUEST_TASKS_FOR_SHIPMENT;

  constructor(public trackingId: string) {
  }
}

export class RequestTasksSuccessfulAction implements Action {
  type = REQUEST_TASKS_SUCCESSFUL;

  constructor(public payload: TaskListResource) {
  }
}

export class RequestTasksFailedAction implements Action {
  type = REQUEST_TASKS_FAILED;

  constructor() {
  }
}
