class ItemRepository{

    constructor(database){
        this.database = database;
    }

    async getAllUsers(){
        return await this.database.query('SELECT * FROM personas');
    }

    async getUserById(id){
        return await this.database.query('SELECT * FROM personas WHERE id = ?', [id]);
    }

    async create(nombres,apellidos,edad){
        return await this.database.query('INSERT INTO personas (nombres,apellidos,edad) VALUES (?, ?, ?)', [nombres,apellidos,edad]);
    }

    async update(id, edad){
        return await this.database.query('UPDATE personas SET edad = ? WHERE id = ?', [edad, id]);
    }

    async delete(id){
        return await this.database.query('DELETE FROM personas WHERE id = ?', [id]);
    }



}

export default ItemRepository;