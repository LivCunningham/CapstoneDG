using System;

namespace capstonedg.models
{
  public class Restaurants
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string Location { get; set; }

    public string Type { get; set; }
    public bool isOpen { get; set; }
    public string Time { get; set; }


    public string Photo { get; set; }
  }
}