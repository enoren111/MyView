using System.Threading.Tasks;
using MyViewBackend.Data;
using MyViewBackend.Models;

namespace MyViewBackend.Services
{
    public class UserService
    {
        private readonly MongoDbContext _dbContext;

        public UserService(MongoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddUser(User newUser)
        {
            var collection = _dbContext.GetCollection("users");
            await collection.InsertOneAsync(newUser);
        }

        // public async Task<User> GetUser(string id)
        // {
        //     var collection = _dbContext.GetCollection("users");
        //     var filter = Builders<User>.Filter.Eq("_id", new ObjectId(id));
        //     return await collection.Find(filter).FirstOrDefaultAsync();
        // }

    }
}
