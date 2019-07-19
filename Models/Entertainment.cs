using System;

namespace capstonedg.models
{
  public class Entertainment

  {
    public int Id { get; set; }

    public string Name { get; set; }

    public string Location { get; set; }

    public string Type { get; set; }
    public bool? isOpen { get; set; }
    public string Time { get; set; }
    public bool Visited { get; set; } = false;
    public string Photo { get; set; }
  }
}