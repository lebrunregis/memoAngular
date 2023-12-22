import { EventEmitter, Injectable, Output } from '@angular/core';
import { Memo } from './memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  @Output() contentsChanged = new EventEmitter<void>();

  public addMemo(memo:Memo){
    memo.date = Date.now()
    localStorage.setItem(memo.date.toString(),JSON.stringify(memo))
    this.contentsChanged.emit();
  }

  public getMemoById(id:string) : Memo{
    let jsonMemo = localStorage.getItem(id)
    let memo;
if (jsonMemo != undefined){
memo = JSON.parse(jsonMemo)
} else {
 memo = new Memo()
}
    return memo
  }

  public  updateMemo(memo:Memo){
    if(memo.date != undefined){
      this.deleteMemo(memo.date)
      this.addMemo(memo)
      this.contentsChanged.emit();
    }
  }

  public  deleteMemo(date: number){
localStorage.removeItem(date.toString())
this.contentsChanged.emit();
  }
  
  public  async getMemos(): Promise<Memo[]> {
    let memos: Memo[] = []
    for (let i=0;i<localStorage.length;i++){
     let key = localStorage.key(i)
     if (key != undefined){
        let memo = localStorage.getItem(key)
        if (memo != undefined){
          memos.push(JSON.parse(memo))
        }
     }
    }
    return memos
  }
}
