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
    //Beginning section by getting list of all bars
    //next add filtering logic to select one random bar

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
        Name = data.Name
      };
      db.Bar.Add(bar);
      db.SaveChanges();
      return Ok(bar);
    }

    // PUT
    [HttpPut("{id}")]
    public ActionResult<List<Bars>> putBars(int id, Bars bar)
    {
      var fixIt = db.Bar.FirstOrDefault(f => f.Id == id);
      fixIt.Photo = bar.Photo;
      fixIt.Name = bar.Name;
      fixIt.Location = bar.Location;
      db.SaveChanges();
      return Ok();
    }
  }
}