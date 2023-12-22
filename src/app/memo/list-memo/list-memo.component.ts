import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';

@Component({
  selector: 'app-list-memo',
  templateUrl: './list-memo.component.html',
  styleUrls: ['./list-memo.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ListMemoComponent  implements OnInit, OnDestroy {

update(memo:Memo) {
this._router.navigate(["memo/edit/"+ memo.date])
}

delete(event: Event, memo:Memo){
  this.confirmDeletion(event, memo)
}

memos: Memo[] = [];
hasMemos: boolean = false;

constructor(private _memoService: MemoService,
  private _router: Router , 
  private _confirmationService: ConfirmationService,
  private _messageService: MessageService) {
   
}

updateMemos(){
    this._memoService.getMemos().then((memos: Memo[]) => {
      this.memos = memos;
      this.hasMemos = this.memos.length > 0 
  });
}

confirmDeletion(event: Event, memo:Memo) {
  this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this memo?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this._messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Memo deleted' });
          this._memoService.deleteMemo(memo.date!)
      },
      reject: () => {
         // this._messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });
}

ngOnInit() {
  this.updateMemos()
  this._memoService.contentsChanged.subscribe(this.updateMemos);
}

ngOnDestroy(){
 //this._memoService.contentsChanged.unsubscribe();
}

}
