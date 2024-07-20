using System.Threading.Tasks;
using MyViewBackend.Data;
using MyViewBackend.Models;
using MongoDB.Driver;

namespace MyViewBackend.Services
{
    public class LoginService
    {
        private readonly MongoDbContext _dbContext;

        public LoginService(MongoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User> ValidateCredentials(string username, string password)
        {
            // Find the user by username
            var collection = _dbContext.GetCollection("users");
            var filter = Builders<User>.Filter.Eq("Username", username);
            var user = await collection.Find(filter).FirstOrDefaultAsync();

            if (user.Password == password)
            {
                return user;
            }
            return null;
        }



    }
}
