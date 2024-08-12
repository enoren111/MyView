using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using MyViewBackend.Models;

namespace MyViewBackend.Services
{
    public class ChatGPTService

    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;

        public ChatGPTService(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _apiKey = Environment.GetEnvironmentVariable("GPT_API_KEY");
        }
        public async Task<string> GetCompletionAsync(string prompt)
        {
            try
            {
                var requestBody = new
                {
                    model = "gpt-3.5-turbo",
                    messages = new[]
                    {
            new
            {
                role = "user",
                content = prompt
            }
        }
                };

                var content = new StringContent(JsonConvert.SerializeObject(requestBody), Encoding.UTF8, "application/json");
                _httpClient.DefaultRequestHeaders.Clear();
                _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_apiKey}");

                var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);
                var responseContent = await response.Content.ReadAsStringAsync();

                dynamic chatResponse = JsonConvert.DeserializeObject<dynamic>(responseContent);
                return chatResponse.choices[0].message.content;
                //return responseContent;
            }
            catch (HttpRequestException ex)
            {
                return ex.Message;
            }



        }
    }




}