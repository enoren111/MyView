using Microsoft.AspNetCore.Mvc;
using MyViewBackend.Models;
using MyViewBackend.Services;

namespace MyViewBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }


        [HttpGet("{username}")]
        public async Task<IActionResult> GetUser(string username)
        {
            var user = await _userService.GetUser(username);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        // [HttpGet("{id}")]
        // public async Task<IActionResult> GetUser(string id)
        // {
        //     var user = _userService.GetUser(id);
        //     return Ok(user);
        // }


        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            await _userService.AddUser(user);
            return Ok(user);
        }
    }
}
