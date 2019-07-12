using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class addingname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Time",
                table: "Bar",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "isOpen",
                table: "Bar",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "Bar");

            migrationBuilder.DropColumn(
                name: "isOpen",
                table: "Bar");
        }
    }
}
