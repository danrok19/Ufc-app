using API.DTOs;
using Application.Implementation;
using Application.Interface;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(IUserService userService) : BaseApi
    {
        [HttpPost("follow")]
        public async Task<ActionResult<Follow>> FollowFighter(UserFollowDTO request)
        {
            var follow = await userService.AddFollowAsync(request.UserId, request.FighterName);
            return Ok(follow);
        }

        [HttpPost("unfollow")]
        public async Task<ActionResult<Follow>> UnFollowFighter(UserFollowDTO request)
        {
            var removed = await userService.DeleteFollowAsync(request.UserId, request.FighterName);
            if (!removed)
            {
                return BadRequest("Follow does not exist.");
            }
            return Ok();
        }

        [HttpGet("isfollowing")]
        public async Task<bool> IsFollowing(string userId, string fighterName)
        {
            bool isFollowing = await userService.CheckIfFollowsFighter(userId, fighterName);
            return isFollowing;
        }


    }
}
