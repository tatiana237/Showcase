import {Component, OnDestroy, OnInit, DoCheck} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {State} from "../../../app.reducers";
import {Address} from "../../../customer/customer-common/api/datastructures/address.datastructure";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskListSlice} from "../../shipment-common/store/tasks/task-list-page.slice";
import {
  InitializeTaskListAction, REQUEST_TASKS,
  RequestTasksAction, RequestTasksForShipmentAction
} from "../../shipment-common/store/tasks/task-list-page.actions";
import {TerminedTaskListModel, TerminedTaskListRowModel} from "./termined-task-list-page.model";



@Component({
  selector: "educama-termined-task-list-page",
  templateUrl: `./termined-task-list-page.component.html`
})
export class terminedTaskListPageComponent implements OnInit, OnDestroy {

// relevant slice of store and subscription for this slice
  public taskListSlice: Observable<TaskListSlice>;
  public taskListSliceSubscription: Subscription;

  // model for the page
  public TerminedTaskListModel: TerminedTaskListModel = new TerminedTaskListModel();

  constructor(private _router: Router,
              private _store: Store<State>,
              private  _activatedRoute: ActivatedRoute) {

    this.taskListSlice = this._store.select(state => state.taskListSlice);
    this.taskListSliceSubscription = this.taskListSlice
      .subscribe(taskListSlice => this.updateTaskListModel(taskListSlice));
  }

  public ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      this._store.dispatch(new RequestTasksForShipmentAction(params["id"]))
    });

  }

  public ngOnDestroy() {
    this._store.dispatch(new InitializeTaskListAction());
    this.taskListSliceSubscription.unsubscribe();
  }

  // ***************************************************
  // Event Handler
  // ***************************************************

  public onTaskSelectedEvent(trackingId: string) {
    this._router.navigate(["/shipments/edit/" + trackingId]);
  }

  // ***************************************************
  // Data Retrieval
  // ***************************************************

  private updateTaskListModel(taskListSlice: TaskListSlice) {
    this.TerminedTaskListModel.TerminedTaskList =
      taskListSlice.taskList.map(
        taskResource => new TerminedTaskListRowModel(
          taskResource.createTime,
          taskResource.trackingId,
          taskResource.taskId,
          taskResource.name,
          taskResource.description,
          taskResource.assignee,
          this.formatAddress(taskResource.sender.address),
          this.formatAddress(taskResource.receiver.address))
      );
  }

  private formatAddress(address: Address): string {
    let formatedAddress = "";
    formatedAddress += address.street + " ";
    formatedAddress += address.streetNo + ", ";
    formatedAddress += address.zipCode + " ";
    formatedAddress += address.city;
    return formatedAddress;
  }
}

