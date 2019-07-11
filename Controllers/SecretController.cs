using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace capstonedg.Controllers
{


  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class SecretController : ControllerBase
  {
    [HttpGet]
    public object Get()
    {
      var userId = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
      return new { userId = userId, message = "only logged in users can see this" };
    }
  }
}