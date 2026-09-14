var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, ID, ObjectType } from '@nestjs/graphql';
let Experience = class Experience {
    company;
    position;
    from;
    to;
    achievements;
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    Field(() => String, {}),
    __metadata("design:type", String)
], Experience.prototype, "company", void 0);
__decorate([
    Field(() => String, {}),
    __metadata("design:type", String)
], Experience.prototype, "position", void 0);
__decorate([
    Field(() => String, {}),
    __metadata("design:type", String)
], Experience.prototype, "from", void 0);
__decorate([
    Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Experience.prototype, "to", void 0);
__decorate([
    Field(() => String, {}),
    __metadata("design:type", String)
], Experience.prototype, "achievements", void 0);
Experience = __decorate([
    ObjectType({ description: 'experience' })
], Experience);
export { Experience };
