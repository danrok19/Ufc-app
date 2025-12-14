using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class News
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Title { get; set; }
        public required string Content { get; set; }
        public DateTime PublishDate { get; set; }

        [ForeignKey("User")]
        public string? UserId { get; set; }
        public virtual User? User { get; set; }
    }
}
