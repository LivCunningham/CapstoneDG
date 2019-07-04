using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using capstonedg.models;

namespace capstonedg.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EntertainmentController : ControllerBase
  {
    private DatabaseContext db;
    public EntertainmentController()
    {
      this.db = new DatabaseContext();
    }

    [HttpGet("{placeType}")]
    public ActionResult<List<Entertainment>> getFun(string placeType)
    {
      var entertainment = db.Fun
      .Where(x => x.Type == placeType).ToList()
      .OrderBy(x => Guid.NewGuid()).Take(1);
      return entertainment.ToList();
    }

    [HttpPost]
    public ActionResult<List<Entertainment>> postFun(Entertainment Fun)
    {
      var theFun = db.Fun.Add(Fun);
      db.SaveChanges();
      return Ok();
    }
  }
}

