import {Body, Controller, Get, Post} from "@nestjs/common";
import {TaskService} from "./task.service";
import {TaskDto} from "./dto";

@Controller('task')
export class TaskController{
    constructor(private TaskService : TaskService) {
    }

    @Post('receive')
    receive(@Body() dto: TaskDto) {
        console.log({
            dto:dto,
        })
        return this.TaskService.receive(dto);
    }
    @Post('status-change')
    statusChange(@Body() data) {
        console.log({
            dto:data,
        })
        return this.TaskService.statusChange(data);
    }

    @Get('sendAllTasks')
    sendAllTasks(){
        return this.TaskService.sendAllTasks();
    }
}