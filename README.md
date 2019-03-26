# Study about interpolation with Async Pipe

## Technologies used in this project

* string interpolation and data binding
* structural directive ngIf
* services
* HttpClient - basic usage
* observables and switching from an observable to another
* async pipe

## Description

Using interpolation or data binding with async pipes can lead to unexpected results.
The problem is that the variable can change while the view is rendered, so a part of the
view will render the old value and the other will render the new value and so on.

More than this, each async pipe will create under the hood a subscription to the observable.
And this can result in a memory problem even though Angular automatically closes all the submits
created with the async pipe.

So the following code:
```
{{ (user$ | async) ? 'Data were loaded correctly' : 'There has been an error...' }}
<ng-container *ngIf="user$ | async; else userIsNotDefined">
  <!-- Show something about the user$ -->
</ng-container>

<ng-template #userIsNotDefined>
  <div class="alert alert-info">
    User is not defined...
  </div>
</ng-template>
```
won't work correctly at all.

Instead we should the following approach:
```
<ng-container *ngIf="user$ | async as user; else userIsNotDefined">
  Data were loaded correctly
  <!-- Show something about the user -->
</ng-container>

<ng-template #userIsNotDefined>
  There has been an error...
  <div class="alert alert-info">
    User is not defined...
  </div>
</ng-template>

```

More on this subject [here](https://ultimatecourses.com/blog/angular-ngif-else-then).