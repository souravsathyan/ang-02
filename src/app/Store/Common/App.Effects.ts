import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { showAlert } from './App.Action';
import { exhaustMap, map } from 'rxjs';
import * as AppActions from './App.Action';
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects {
  constructor(private $action: Actions, private _snackbar: MatSnackBar) {}

  _showAlert = createEffect(() =>

    this.$action.pipe(
      ofType(showAlert),
      exhaustMap((action) =>
        this.ShowSnackBarAlert(action.message, action.resultype)
          .afterDismissed()
          .pipe(map(() => AppActions.emptyAction()))
      )
    )
  );

  ShowSnackBarAlert(message: string, resulType: string = 'fail') {
    let _class = resulType == 'pass' ? 'green-snackbar' : 'red-snackbar';
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 5000,
      panelClass: [_class],
    });
  }

  
}
