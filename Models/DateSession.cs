using System;

namespace capstonedg.models
{
  public class DateSession
  {
    public int Id { get; set; }
    public int FunId { get; set; }
    public int BarId { get; set; }
    public int UserId { get; set; }
    public int SessionNumber { get; set; }
    public DateTime DateTime { get; set; }
  }
}