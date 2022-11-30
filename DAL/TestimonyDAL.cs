using Entity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace DAL
{
  public class TestimonyDAL :ITestimonyDAL
  {
    public async Task<Testimony> GetDL()
    {
      
      var options = new JsonSerializerOptions
      {
        IncludeFields = true,
      };
      using FileStream openStream = File.OpenRead("C:\\Users\\1\\Downloads\\YadVashem\\data.json");
      Testimony t = await JsonSerializer.DeserializeAsync<Testimony>(openStream, options);
      return t;


    }
  }
}
