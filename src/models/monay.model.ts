import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'tb_monay'
})

export class MonayModel extends Model<MonayModel>{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    id: string; 

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}