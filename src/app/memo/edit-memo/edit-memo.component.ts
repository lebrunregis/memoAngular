import { Component } from '@angular/core';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MessageService }from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-memo',
  templateUrl: './edit-memo.component.html',
  styleUrls: ['./edit-memo.component.css'],
  providers: [MessageService]
})
export class EditMemoComponent {
  memoId: string ="";
  memo : Memo = new Memo()

  constructor(
    private _memoService: MemoService,
    private _route: ActivatedRoute,
    private _router: Router , 
    private _messageService: MessageService) {   
    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.memoId = params['id']
      this.memo = this._memoService.getMemoById(this.memoId)
  }
  );
  }

  updateMemo() {
    if (this.memo !== null){
      this._memoService.updateMemo(this.memo)     
        this._messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Memo updated' });
          this._router.navigate(["memo/list"])
    }
  }
}