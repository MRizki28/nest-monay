"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let AccountModel = class AccountModel extends sequelize_typescript_1.Model {
};
exports.AccountModel = AccountModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    }),
    __metadata("design:type", String)
], AccountModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.UserModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false
    }),
    __metadata("design:type", String)
], AccountModel.prototype, "id_user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.UserModel, 'id_user'),
    __metadata("design:type", user_model_1.UserModel)
], AccountModel.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], AccountModel.prototype, "account_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], AccountModel.prototype, "balance", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('tabungan', 'giro'),
        allowNull: false
    }),
    __metadata("design:type", String)
], AccountModel.prototype, "account_type", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], AccountModel.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], AccountModel.prototype, "updated_at", void 0);
exports.AccountModel = AccountModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'tb_account'
    })
], AccountModel);
//# sourceMappingURL=account.model.js.map