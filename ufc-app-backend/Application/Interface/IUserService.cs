using Domain;

namespace Application.Interface
{
    public interface IUserService
    {
        Task<Follow> AddFollowAsync(string userId, string fighterName);
        Task<bool> CheckIfFollowsFighter(string userId, string fighterName);
        Task<bool> DeleteFollowAsync(string userId, string fighterName);
    }
}
