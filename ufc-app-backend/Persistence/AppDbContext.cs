using Microsoft.EntityFrameworkCore;
using System;
using Domain;

namespace Persistence
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Follow> Follows { get; set; }
    }
}
