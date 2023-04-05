import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DemandeDeStageService } from 'src/app/services/demande-de-stage/demande-de-stage.service';
import { DemandeDeStage } from 'src/app/models';



@Component({
  selector: 'app-dialog-confirmation-delete',
  templateUrl: './dialog-confirmation-delete.component.html',
  styleUrls: ['./dialog-confirmation-delete.component.scss']
})
export class DialogConfirmationDeleteComponent  implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationDeleteComponent>,
    private demandeDeStageService: DemandeDeStageService, 
    @Inject(MAT_DIALOG_DATA) public data: {
      id: string
    }
  ) {}

  ngOnInit(): void {
  }

  deleteConfirmation(): void {
    console.log(this.data.id);

    this.demandeDeStageService.deleteDemandeDeStage(this.data.id).subscribe(
      _ => {
        this.dialogRef.close("La suppession est réussie ");
      }
    );
  }

}
