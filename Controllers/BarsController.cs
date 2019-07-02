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
      var bars = db.Bar.Where(x => x.Type == placeType);

      return bars.ToList();
    }

    [HttpPost]
    public ActionResult<List<Bars>> postBars(Bars bar)
    {
      var bars = db.Bar.Add(bar);
      db.SaveChanges();
      return Ok();
    }



  }
}