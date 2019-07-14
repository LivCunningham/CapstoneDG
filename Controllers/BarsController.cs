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
  public class BarsController : ControllerBase
  {
    private DatabaseContext db;
    public BarsController()
    {
      this.db = new DatabaseContext();
    }


    [HttpGet]
    public ActionResult<List<Bars>> getData()
    {
      var bars = db.Bar;
      return bars.ToList();
    }

    //delete
    [HttpDelete("deleteall")]
    public ActionResult<List<Bars>> DeleteAll()
    {
      var all = db.Bar.ToList();
      db.RemoveRange(all);
      db.SaveChanges();
      return Ok();
    }


    // {
    //     Name = data.Name,
    //     Location = data.Address,
    //     Type = data.Type,
    //     isOpen = data.isOpen,
    //     Time = data.Time,
    //     Photo = data.Photo
    //   };



    // PUT
    [HttpPut("{id}")]
    public ActionResult<List<Bars>> putBars(int id, DataViewModel data)
    {
      var fixIt = db.Bar.FirstOrDefault(f => f.Id == id);
      fixIt.Name = data.Name;
      fixIt.Location = data.Address;
      fixIt.Type = data.Type;
      fixIt.isOpen = data.isOpen;
      fixIt.Time = data.Time;
      fixIt.Photo = data.Photo;
      db.SaveChanges();
      return Ok();
    }





    //random
    [HttpGet("{placeType}")]
    public ActionResult<List<Bars>> getBars(string placeType)
    {
      var bars = db.Bar
      .Where(x => x.Type == placeType).ToList()
      .OrderBy(x => Guid.NewGuid()).Take(1);
      return bars.ToList();

      // var randomBar = bars.ToList().Skip(2)
      // .Take(1);
      // return randomBar.ToList();
    }

    [HttpPost]
    public ActionResult<List<Bars>> postBars(DataViewModel data)
    {
      var bar = new Bars
      {
        Name = data.Name,
        Location = data.Address,
        Type = data.Type,
        isOpen = data.isOpen,
        Time = data.Time,
        Photo = data.Photo
      };
      db.Bar.Add(bar);
      db.SaveChanges();
      return Ok(bar);
    }

    // // PUT
    // [HttpPut("{id}")]
    // public ActionResult<List<Bars>> putBars(int id, Bars bar)
    // {
    //   var fixIt = db.Bar.FirstOrDefault(f => f.Id == id);
    //   fixIt.Photo = bar.Photo;
    //   fixIt.Name = bar.Name;
    //   fixIt.Location = bar.Location;
    //   db.SaveChanges();
    //   return Ok();
    // }
  }
}