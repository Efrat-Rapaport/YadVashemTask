using Entity;
using System.Threading.Tasks;

namespace DAL
{
  public interface ITestimonyDAL
  {
    
    Task<Testimony> GetDL();
  }
}
