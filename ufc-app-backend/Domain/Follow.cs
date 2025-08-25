using System;

namespace Domain;

public class Follow
{
	public string Id { get; set; } = Guid.NewGuid().ToString();

	public required string FighterName { get; set; }

    public DateTime? followDate { get; set; }

}
