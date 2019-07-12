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
  public class RestaurantsController : ControllerBase
  {
    private DatabaseContext db;
    public RestaurantsController()
    {
      this.db = new DatabaseContext();
    }

    // [HttpGet]
    // public ActionResult<List<Restaurants>> getRestaurants()
    // {
    //   var restaurants = db.Restaurant;
    //   return restaurants.ToList();
    // }

    // //delete
    // [HttpDelete("deleteallR")]
    // public ActionResult<List<Restaurants>> DeleteAll()
    // {
    //   var allR = db.Restaurant.ToList();
    //   db.RemoveRange(allR);
    //   db.SaveChanges();
    //   return Ok();
    // }


    //random
    [HttpGet("{placeType}")]
    public ActionResult<List<Restaurants>> getRestaurants(string placeType)
    {
      var restaurants = db.Restaurant
      .Where(x => x.Type == placeType).ToList()
      .OrderBy(x => Guid.NewGuid()).Take(1);
      return restaurants.ToList();
    }

    [HttpPost]
    public ActionResult<List<Restaurants>> postRestaurants(Restaurants restaurant)
    {
      var restaurants = db.Restaurant.Add(restaurant);
      db.SaveChanges();
      return Ok();
    }
  }
}
