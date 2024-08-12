import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { UserModel } from "./user.model";

@Table({
    tableName: 'tb_account'
})

export class AccountModel extends Model<AccountModel>{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    id: string; 

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    id_user: string;

    @BelongsTo(() => UserModel, 'id_user')
    user: UserModel;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    account_name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    balance: number;

    @Column({
        type: DataType.ENUM('tabungan', 'giro'),
        allowNull: false
    })
    account_type: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}