import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/roles.decorater';
import { Role } from 'src/guards/role/roles.enum';

@Controller('user-roles')
export class UserRolesController {

    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return 'only admin can access this data';
    }

    @Get('user-data')
    getUserData() {
        return 'only user can access this data';
    }
}