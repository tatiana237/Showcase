import {Action} from "@ngrx/store";
import {TaskListResource} from "../../api/resources/task-list.resource";

// Initialize Actions
export const INITIALIZE_TERMINED_TASK_LIST = "INITIALIZE_TERMINED_TASK_LIST";

// Tasks API Actions
export const REQUEST_TERMINED_TASKS = "REQUEST_TERMINED_TASKS";
export const REQUEST_TERMINED_TASKS_SUCCESSFUL = "REQUEST_TERMINED_TASKS_SUCCESSFUL";
export const REQUEST_TERMINED_TASKS_FAILED = "REQUEST_TERMINED_TASKS_FAILED";

export const REQUEST_TERMINED_TASKS_FOR_SHIPMENT = "REQUEST_TERMINED_TASKS_FOR_SHIPMENT";

// Actions
export class InitializeTaskListAction implements Action {
  type = INITIALIZE_TERMINED_TASK_LIST;

  constructor() {
  }
}

export class RequestTasksAction implements Action {
  type = REQUEST_TERMINED_TASKS;

  constructor() {
  }
}

export class RequestTasksForShipmentAction implements Action {
  type = REQUEST_TERMINED_TASKS_FOR_SHIPMENT;

  constructor(public trackingId: string) {
  }
}

export class RequestTasksSuccessfulAction implements Action {
  type = REQUEST_TERMINED_TASKS_SUCCESSFUL;

  constructor(public payload: TaskListResource) {
  }
}

export class RequestTasksFailedAction implements Action {
  type = REQUEST_TERMINED_TASKS_FAILED;

  constructor() {
  }
}
