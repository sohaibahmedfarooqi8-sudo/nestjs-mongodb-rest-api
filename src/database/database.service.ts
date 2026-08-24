import { Injectable ,} from '@nestjs/common';

@Injectable()
export class DatabaseService {

    private isConnected = false;

    onModuleInit(){
      
    this.isConnected = true;
    console.log(`database connnection is successfull`);
    }

    onApplicationShutdown(signal:string){

        this.isConnected = false;
        console.log(`database disconnected due to application shutdown. Signal: ${signal}`)
    }

    getStatus(){
      return  this.isConnected? 'Connected' : 'Disconnected';
    }
}
