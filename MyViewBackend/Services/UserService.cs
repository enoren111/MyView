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
            await _dbContext.Users.InsertOneAsync(newUser);
        }

        public async Task<User> GetUser(string id)
        {
            return await _dbContext.FindUserById(id);
        }

    }
}
