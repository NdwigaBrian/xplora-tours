import { PrismaClient } from "@prisma/client";
import { login_details } from "../interfaces/auth";


export class authService{

    prisma = new PrismaClient({
        log:['error']
    })

    async login(logins: login_details){

        let user = await this.prisma.user.findMany({
            where:{
                email:logins.email
            }
        })

        if(user.length < 1){
            return {
                error: "user not found"
            }
        }else{

            console.log(user[0]);
            
            
            let hashedPassword = user[0].password

        
            
        
    
        }
    }
}