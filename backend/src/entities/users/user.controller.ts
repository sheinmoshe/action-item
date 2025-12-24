import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './user.interace';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post('/update-user')
  async updateUser(@Body() user: User) {
    return await this.userService.updateUser(user);
  }  
  
  @Post('/save-user')
  async saveUser(@Body() user: User) {
    return await this.userService.saveUser(user);
  }

  @Post('/delete-user')
  async deleteUser(@Body() name: {firstName: string, lastName:string}) {
    return await this.userService.deleteUser(name.firstName, name.lastName);
  }
}