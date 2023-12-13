import { Injectable } from '@angular/core';
import { Memo } from './memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  public addMemo(memo:Memo){
    memo.date = Date.now()
    localStorage.setItem(memo.date.toString(),JSON.stringify(memo))
  }

  public  updateMemo(memo:Memo){
    if(memo.date != undefined){
      this.deleteMemo(memo.date)
      this.addMemo(memo)
    }
  }

  public  deleteMemo(date: number){
localStorage.removeItem(date.toString())
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
