using Microsoft.AspNetCore.Mvc;
using MyViewBackend.Models;
using MyViewBackend.Services;

namespace MyViewBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly LoginService _loginService;

        public LoginController(LoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var user = await _loginService.ValidateCredentials(loginModel.Username, loginModel.Password);
            return Ok(user);


            // if (_loginService.ValidateCredentials(loginModel.Username, loginModel.Password))
            // {
            //     // Redirect to another page upon successful login
            //     // Assuming "Home" is the controller and "Index" is the action for the target page
            //     return Ok("Successful!");
            // }
            // else
            // {
            //     // Return an error response or view if login fails
            //     return Ok("Unsuccessful!"); // Or return a specific view with error message
            // }
        }

    }
}
