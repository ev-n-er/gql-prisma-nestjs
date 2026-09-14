var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, ID, ObjectType, ResolveField } from '@nestjs/graphql';
import { Experience } from "./experience.model.js";
import { Skill } from "./skill.model.js";
import { Project } from "./project.model.js";
let Profile = class Profile {
    id;
    name;
    description;
    links;
    experience;
    skills;
    projects;
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    Field(() => ID, {}),
    __metadata("design:type", String)
], Profile.prototype, "id", void 0);
__decorate([
    Field(() => String, {}),
    __metadata("design:type", String)
], Profile.prototype, "name", void 0);
__decorate([
    Field(() => String, {}),
    __metadata("design:type", String)
], Profile.prototype, "description", void 0);
__decorate([
    Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Profile.prototype, "links", void 0);
__decorate([
    Field(() => [Experience], { nullable: true }),
    __metadata("design:type", Array)
], Profile.prototype, "experience", void 0);
__decorate([
    Field(() => [Skill], { nullable: true }),
    __metadata("design:type", Array)
], Profile.prototype, "skills", void 0);
__decorate([
    Field(() => [Project], { nullable: true }),
    __metadata("design:type", Array)
], Profile.prototype, "projects", void 0);
Profile = __decorate([
    ObjectType({ description: 'profile' })
], Profile);
export { Profile };
