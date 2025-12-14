using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interface
{
    public interface IAdminService
    {
        Task AddNewsAsync(string title, string content, DateTime publishDate, string userId);
    }
}
