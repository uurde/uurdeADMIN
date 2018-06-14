import { BaseModel } from "./base.model";

export class ProjectModel extends BaseModel {
    projectId: number;
    projectTypeId: number;
    projectTypeName: string;
    projectCompany: string;
    projectImagePath: string;
    startDate: Date;
    endDate: Date;
}