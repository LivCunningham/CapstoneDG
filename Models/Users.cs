using System;

namespace capstonedg.models
{
  public class Users
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    public string UserName { get; set; }

    public string PasswordHash { get; set; }

    public int SessionNumber { get; set; }

    public DateTime LastLogin { get; set; }
  }
}
