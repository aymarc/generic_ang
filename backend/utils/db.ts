import {Sequelize} from "sequelize";



export default class DB{
    private readonly  DB_NAME: string;
    private readonly  DB_USER: string;
    private readonly  DB_PASSWORD: string;
    private readonly DB_HOST: string;
    readonly initializer;
    constructor(){
        this.DB_NAME = process.env.DB_NAME as string;
        this.DB_USER = process.env.DB_USER as string ;
        this.DB_PASSWORD = process.env.DB_PASSWORD as string;
        this.DB_HOST = process.env.DB_HOST as string;

        this.initializer = new Sequelize(
            this.DB_NAME,
            this.DB_USER,
            this.DB_PASSWORD,
            {
                host: this.DB_HOST,
                dialect: "sqlite"
            }
        )
    }


} 



