export class Quote {
    constructor(public id:number, public quote: string, public author: string, public submittee: string, public dateCreated: Date, public likes:number, public dislikes:number, public duration:number, public highest:boolean ){
        
    }
}
