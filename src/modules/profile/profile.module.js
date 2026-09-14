var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ProfileResolver } from "./profile.resolver.js";
import { ProfileService } from "../../services/profile.service.js";
import { SkillService } from "../../services/skill.service.js";
import { ProjectService } from "../../services/project.service.js";
import { ExperienceService } from "../../services/experience.service.js";
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    Module({
        providers: [ProfileResolver, ProfileService, SkillService, ProjectService, ExperienceService],
    })
], ProfileModule);
export { ProfileModule };
