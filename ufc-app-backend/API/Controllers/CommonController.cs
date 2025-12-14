using Application.Interface;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController(IUserService userService) : BaseApi
    {
        [HttpGet("news")]
        public async Task<ActionResult<List<News>>> GetAllNews()
        {
            try
            {
                var news = await userService.GetAllNews();
                return Ok(news);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
