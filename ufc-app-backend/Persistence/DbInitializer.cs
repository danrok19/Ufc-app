using Domain;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class DbInitializer
    {
        public static async Task SeedData(AppDbContext context, UserManager<User> userManger)
        {
            if (context.Users.Any()) return;

            var adminUser = new Domain.User
            {
                DisplayName = "ADMIN",
                UserName = "admin",
                Email = "admin@gmail.com"
            };

            await userManger.CreateAsync(adminUser, "Pa$$w0rd");
        }
    }
}
