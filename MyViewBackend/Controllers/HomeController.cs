using Microsoft.AspNetCore.Mvc;

namespace MyViewBackend.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Welcome to the API!");
        }


    }
}