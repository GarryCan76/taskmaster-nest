import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import {TaskDto} from "./dto";

// import {Task} from '@prisma/client'

@Injectable({})
export class TaskService{
    constructor(private prisma:PrismaService) {
    }
    async receive(dto: TaskDto) {
        const task = await this.prisma.task.create({
            data:{
                title: dto.title,
                description: dto.description,
                status: dto.status,
            },
        })
        return {'msg':'Hello World!'};
    }

    async statusChange(statusData){
        const updateUser = await this.prisma.task.update({
            where: {
                id: statusData.id,
            },
            data: {
                status: statusData.status,
            },
        })
    }

    async sendAllTasks() {
        const allTasks = await this.prisma.task.findMany({
            where:{
                NOT: {
                    status: {
                        endsWith: "archived"
                    }
                }
            }
        })
        return allTasks;
    }


}