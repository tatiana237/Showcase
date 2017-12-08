import {TaskListResource} from "../../shipment-common/api/resources/task-list.resource";

export class EnabledTaskListModel {
  public enabledTaskList: EnabledTaskListRowModel[];
}


export class EnabledTaskListRowModel {
  public trackingId: string;
  public type: string;
  public name: string;
  public id: string;
  public description: string;

  constructor(trackingId: string,
              type: string,
              name: string,
              id: string,
              description: string) {
    this.trackingId = trackingId;
    this.name = name;
    this.description = description;
    this.id = id;
    this.type = type;
  }
}
