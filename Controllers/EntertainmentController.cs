using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using capstonedg.models;
using capstonedg.viewmodels;

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

    // [HttpGet("{placeType}")]
    // public ActionResult<List<Entertainment>> getFun(string placeType)
    // {
    //   var entertainment = db.Fun
    //   .Where(x => x.Type == placeType).ToList()
    //   .OrderBy(x => Guid.NewGuid()).Take(1);
    //   return entertainment.ToList();
    // }

    [HttpPost]
    public ActionResult<List<Entertainment>> postFun(DataViewModel data)
    {
      var theFun = new Entertainment
      {
        Name = data.Name,
        Location = data.Address,
        Type = data.Type,
        isOpen = data.isOpen,
        Time = data.Time,
        Photo = data.Photo
      };
      db.Fun.Add(theFun);
      db.SaveChanges();
      return Ok(theFun);
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult<List<Entertainment>> putEntertainment(int id, Entertainment Fun)
    {
      var fixIt = db.Fun.FirstOrDefault(f => f.Id == id);
      fixIt.Photo = Fun.Photo;
      fixIt.Name = Fun.Name;
      fixIt.Location = Fun.Location;
      db.SaveChanges();
      return Ok();
    }


  }
}

