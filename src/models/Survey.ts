import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("Surveys")
class Survey{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        // se o id não existir
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Survey }