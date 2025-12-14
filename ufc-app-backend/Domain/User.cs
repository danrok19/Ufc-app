using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class User : IdentityUser
    {
        public string? DisplayName { get; set; }
        public string? ImageUrl { get; set; }

        public string Role { get; set; } = string.Empty;

        public virtual ICollection<Follow>? Follows { get; set; }
    }
}
