import { Component } from '@angular/core';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';

@Component({
  selector: 'app-edit-memo',
  templateUrl: './edit-memo.component.html',
  styleUrls: ['./edit-memo.component.css']
})
export class EditMemoComponent {
  constructor(
    private memoService: MemoService
    ) { }
  
updateMemo() {
  this.memoService.updateMemo(this.memo)
}
memo : Memo = new Memo()
}
