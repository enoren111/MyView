using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyViewBackend.Models;

namespace MyViewBackend.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoClient client;

        public MongoDbContext(string connectionString, string dbName)
        {
            client = new MongoClient(connectionString);
            _database = client.GetDatabase(dbName);
        }

        // public MongoDbContext()
        // {
        //     client = new MongoClient("mongodb://yourUsername:yourPassword@localhost:27017");
        //     _database = client.GetDatabase("myviewdb");
        // }

        public IMongoCollection<User> GetCollection(string collectionName)
        {
            return _database.GetCollection<User> (collectionName);
        }


    }

}
