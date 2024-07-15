using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyViewBackend.Models;

namespace MyViewBackend.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(string connectionString, string dbName)
        {
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(dbName);
        }

        public IMongoCollection<User> Users => _database.GetCollection<User>("Users");

        // Generic Find method
        public async Task<User> FindUserById(string id)
        {
            var filter = Builders<User>.Filter.Eq(u => u.Id, id);
            return await Users.Find(filter).FirstOrDefaultAsync();
        }

    }

}
