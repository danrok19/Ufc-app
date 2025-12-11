using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain;

public class Follow
{
	public string Id { get; set; } = Guid.NewGuid().ToString();

	public required string FighterName { get; set; }

    public DateTime? followDate { get; set; }

    [ForeignKey("User")]
    public string UserId { get; set; }
    public virtual User? User { get; set; }
}
