﻿import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { checkFormValidAndSignalChange } from "@utils/check-form-valid-and-signal-change";
import { applyValidationErrorsToFormGroup } from "@utils/apply-validation-errors-to-form-group";

export function checkAndSendForm (fg: FormGroup,
                                  remoteMethod: () => Observable<Object>,
                                  onSuccess: () => void,
                                  onFailure: () => void = null) {

  if (!checkFormValidAndSignalChange(fg)) {
    if (onFailure){
      onFailure();
    }
    return;
  }

  remoteMethod().subscribe(response => {
    onSuccess();
  }, (res) => {
    if (onFailure){
      onFailure();
    }
    applyValidationErrorsToFormGroup(res.error, this.itemForm);
  });
}
