import {ActionReducer, Action} from "@ngrx/store";
import * as actions from "./termined-task-list-page.actions";
import {TERMINED_TASK_LIST_SLICE_INITIAL_STATE} from "./termined-task-list-page.initial-state";
import {TerminedTaskListSlice} from "./termined-task-list-page.slice";

export function terminedTaskListPageReducer(state: TerminedTaskListSlice = TERMINED_TASK_LIST_SLICE_INITIAL_STATE,
                                    action: Action): TerminedTaskListSlice {
    switch (action.type) {
      case actions.INITIALIZE_TERMINED_TASK_LIST:
        return TERMINED_TASK_LIST_SLICE_INITIAL_STATE;
      case actions.REQUEST_TERMINED_TASKS:
        return Object.assign({}, state, {
          loading: true
        });
      case actions.REQUEST_TERMINED_TASKS_SUCCESSFUL:
        const requestTasksSuccessfulAction = action as actions.RequestTasksSuccessfulAction;
        return Object.assign({}, state, {
          taskList: requestTasksSuccessfulAction.payload.tasks,
          loading: false
        });
      case actions.REQUEST_TERMINED_TASKS_FAILED:
        return Object.assign({}, state, {
          loading: false
        });
      default:
        return state;
    }
  }

export const TERMINED_TASK_LIST_PAGE_REDUCER: ActionReducer<TerminedTaskListSlice> = terminedTaskListPageReducer;
