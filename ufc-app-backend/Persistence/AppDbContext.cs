using Microsoft.EntityFrameworkCore;
using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistence
{
    public class AppDbContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public DbSet<Follow> Follows { get; set; }

        public DbSet<News> News { get; set; }
    }
}
