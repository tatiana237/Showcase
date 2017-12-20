import {TaskResource} from "../../api/resources/task.resource";

export interface TerminedTaskListSlice {
  taskList: TaskResource[];
  loading: boolean;
  //currentShipmentId: string;
}
