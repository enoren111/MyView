using Microsoft.AspNetCore.Mvc;
using MyViewBackend.Services;
using MyViewBackend.Models;
using System.Threading.Tasks;

namespace MyViewBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatGPTController : ControllerBase
    {
        private readonly ChatGPTService _chatGPTService;

        public ChatGPTController(ChatGPTService chatGPTService)
        {
            _chatGPTService = chatGPTService;
        }

        [HttpPost]
        public async Task<IActionResult> InteractWithChatGPT([FromBody] ChatGPTRequest request)
        {
            try
            {
                var response = await _chatGPTService.GetCompletionAsync(request.Prompt);
                return Ok(response);
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }


}