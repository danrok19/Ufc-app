using Application.Interface;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Application.Implementation
{
    public class AdminService(AppDbContext context) : IAdminService
    {
        public async Task AddNewsAsync(string title, string content, DateTime publishDate, string userId)
        {
            var user = await context.Users.FindAsync(userId);
            if (user == null || user.Role != "Admin")
            {
                throw new UnauthorizedAccessException("Only admins can add news.");
            }

            var news = new News
            {
                Title = title,
                Content = content,
                PublishDate = publishDate,
                User = user
            };

            await context.News.AddAsync(news);
            await context.SaveChangesAsync();

        }
    }
}
