using Application.Interface;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Implementation
{
    public class UserService(AppDbContext context) : IUserService
    {
        public async Task<Follow> AddFollowAsync(string userId, string fighterName)
        {
            var follow = new Follow
            {
                FighterName = fighterName.ToString(),
                UserId = userId.ToString(),
                followDate = DateTime.UtcNow
            };

            await context.Follows.AddAsync(follow);
            await context.SaveChangesAsync();

            return follow;
        }

        public async Task<bool> CheckIfFollowsFighter(string userId, string fighterName)
        {
            var follow = await context.Follows.FirstOrDefaultAsync(
                f => f.UserId == userId && f.FighterName == fighterName);
            if (follow != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> DeleteFollowAsync(string userId, string fighterName)
        {
            var follow = await context.Follows.FirstOrDefaultAsync(
                f => f.UserId == userId && f.FighterName == fighterName);
            if (follow != null)
            {
                context.Follows.Remove(follow);
                await context.SaveChangesAsync();

            }
            else
            {
                return false;
            }

            return true;
        }
    }
}
