import { Component } from '@angular/core';
import { Memo } from 'src/app/service/memo';
import { MemoService } from 'src/app/service/memo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-memo',
  templateUrl: './edit-memo.component.html',
  styleUrls: ['./edit-memo.component.css']
})
export class EditMemoComponent {
  memoId: string ="";
  memo : Memo = new Memo()

  constructor(
    private memoService: MemoService,
    private route: ActivatedRoute) {   
      console.log(this.route.snapshot.params);
      console.log(this.route.snapshot.data);
    }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.memoId = params['id']
      this.memo = this.memoService.getMemoById(this.memoId)
  }
  );
  }

  updateMemo() {
    if (this.memo !== null){
      this.memoService.updateMemo(this.memo)
    }
  }
}