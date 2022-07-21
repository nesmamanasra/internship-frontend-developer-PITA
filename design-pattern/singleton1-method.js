class DBConnection {
    connection = null;
    static getInstance() {
        if (!this.connection) {
            console.log('crating....');
            this.connection = new DBConnection();
        }
        return this.connection;
    }

    applyGetQuery(query) {
        console.log(query);
    }
}

class UserDataManger { 
    dbConnection;
    constructor() {
        this.dbConnection = DBConnection.getInstance();
    }

    getUserById(id) {
        this.dbConnection.applyGetQuery(`select * from users where id = ${id}`);
    }
}

class TicketsDataManger {
    dbConnection;
    constructor() {
        this.dbConnection = DBConnection.getInstance();
    }

    getTicketByUserId(id) {
        this.dbConnection.applyGetQuery(`select * from tickets where user_id = ${id}`);
    }
}

function bootstrap() {
    const userDataManger = new UserDataManger();
    const ticketsDataManger = new TicketsDataManger();
    userDataManger.getUserById(1);
    ticketsDataManger.getTicketByUserId(1);
}

bootstrap();