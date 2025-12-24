import { Injectable } from '@nestjs/common';
import { promises as fsPromises } from 'fs';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { User } from './user.interace';
import { log } from 'console';

// const usersData = require('./users.data.json');

@Injectable()
export class UserService {
  async getUsers() {
     try {
        const filePath = join(process.cwd(), 'src/entities/users/users.data.json');
        const fileContent = await fsPromises.readFile(filePath, 'utf8');
        const users = JSON.parse(fileContent);
        return users;
    } catch (err) {
        console.error("Error reading or parsing file:", err);
    }   
  }

    async updateUser(user: User) {
     try {
        const filePath = join(process.cwd(), 'src/entities/users/users.data.json');
        const fileContent = await fsPromises.readFile(filePath, 'utf8');
        const users = JSON.parse(fileContent);
        return users;
    } catch (err) {
        console.error("Error reading or parsing file:", err);
    }   
  }

    async saveUser(user: User) {
     try {
        const filePath = join(process.cwd(), 'src/entities/users/users.data.json');
        const fileContent = await fsPromises.readFile(filePath, 'utf8');
        const users = JSON.parse(fileContent);
        users.push(user);
        await writeFile(filePath, JSON.stringify(users), 'utf8');
        return users;
    } catch (err) {
        console.error("Error reading or parsing file:", err);
    }   
  }

    async deleteUser(firstName: string, lastName:string) {
     try {
        const filePath = join(process.cwd(), 'src/entities/users/users.data.json');
        const fileContent = await fsPromises.readFile(filePath, 'utf8');
        const users = JSON.parse(fileContent);
        const updatedUsers = users.filter((user:User) => user.name.first !== firstName && user.name.last !== lastName);
        await writeFile(filePath, JSON.stringify(updatedUsers), 'utf8');
        return updatedUsers;
    } catch (err) {
        console.error("Error reading or parsing file:", err);
    }   
  }
}
