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

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            try
            {
                var user = await _loginService.ValidateCredentials(loginModel.Username, loginModel.Password);

                if (user != null)
                {
                    return Ok(user); // 登录成功，返回用户信息
                }
                else
                {
                    return Unauthorized(new { message = "Invalid username or password" }); // 登录失败，返回401
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while processing your request", details = ex.Message });
            }
        }
    }
}
