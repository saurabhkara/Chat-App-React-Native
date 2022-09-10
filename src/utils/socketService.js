
import io from 'socket.io-client';
const SOCKET_URL='http://localhost:3000';

class WSService{
    initializeSocket= async ()=>{
        
        try{
            this.socket=io(SOCKET_URL,{
                transports:['websocket']
            });
            console.log('socket initialized');

            this.socket.on('connect',()=>{

                console.log('========connected to server========');
                
            });

            this.socket.on('disconnect',(data)=>{
                console.log('=========disconnected from server========',data);
            })

            this.socket.on('error',(error)=>{
                console.log('=======error========',error);
            });


        }catch(error){
            console.log(error);
        }
    }

    emit=(event,data={})=>{
        this.socket.emit(event,data);
    }

    on=(event,callback)=>{
        this.socket.on(event,callback);
    }

    removeListener=(event)=>{
        this.socket.removeListener(event);
    }
}

const wsService=new WSService();

export default wsService;