import connection from './service/QuizAPIService';

class QuizAPIService{
    getAll(){
        return connection.get()
    }
}