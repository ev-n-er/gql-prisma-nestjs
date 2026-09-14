var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Profile } from "../../models/profile.model.js";
import { ProfileService } from "../../services/profile.service.js";
import { SkillService } from "../../services/skill.service.js";
import { ProjectService } from "../../services/project.service.js";
import { ExperienceService } from "../../services/experience.service.js";
let ProfileResolver = class ProfileResolver {
    profilesService;
    skillService;
    projectService;
    experienceService;
    constructor(profilesService, skillService, projectService, experienceService) {
        this.profilesService = profilesService;
        this.skillService = skillService;
        this.projectService = projectService;
        this.experienceService = experienceService;
    }
    async profile(id) {
        const profile = await this.profilesService.findOneById(id);
        if (!profile) {
            throw new NotFoundException(id);
        }
        return profile;
    }
    profiles() {
        return this.profilesService.findAll();
    }
    async links(profile) {
        const { id } = profile;
        return await this.profilesService.findLinks(id);
    }
    async skills(profile) {
        const { id } = profile;
        return await this.skillService.findForProfile(id);
    }
    async projects(profile) {
        const { id } = profile;
        return await this.projectService.findForProfile(id);
    }
    async experience(profile) {
        const { id } = profile;
        return await this.experienceService.findForProfile(id);
    }
};
__decorate([
    Query(() => Profile),
    __param(0, Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "profile", null);
__decorate([
    Query(() => [Profile]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "profiles", null);
__decorate([
    ResolveField(),
    __param(0, Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Profile]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "links", null);
__decorate([
    ResolveField(),
    __param(0, Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Profile]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "skills", null);
__decorate([
    ResolveField(),
    __param(0, Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Profile]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "projects", null);
__decorate([
    ResolveField(),
    __param(0, Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Profile]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "experience", null);
ProfileResolver = __decorate([
    Resolver(() => Profile),
    __metadata("design:paramtypes", [ProfileService,
        SkillService,
        ProjectService,
        ExperienceService])
], ProfileResolver);
export { ProfileResolver };
