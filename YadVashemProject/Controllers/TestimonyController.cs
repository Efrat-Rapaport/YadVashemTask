using BL;
using Entity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YadVashemProject.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TestimonyController : ControllerBase
  {
    public ITestimonyBL itestimonybl;
   
    public TestimonyController(ITestimonyBL itestimonybl)
    {
      this.itestimonybl = itestimonybl;
      
    }

    // GET api/<TestimonyController>/5
    [HttpGet()]
   
    public async Task<Testimony> Get()
    {
      return await itestimonybl.GetBL();
    }

  }
}
