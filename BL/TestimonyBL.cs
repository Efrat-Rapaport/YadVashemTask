using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class TestimonyBL: ITestimonyBL
    {
    ITestimonyDAL itestimonydal;

    public TestimonyBL(ITestimonyDAL itestimonydal)
    {
      this.itestimonydal = itestimonydal;
    }

    public async Task<Testimony> GetBL()
    {
      return await itestimonydal.GetDL();
    }
  }
}
