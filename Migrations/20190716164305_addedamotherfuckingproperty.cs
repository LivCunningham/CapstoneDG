using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class addedamotherfuckingproperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Time",
                table: "Restaurant",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "isOpen",
                table: "Restaurant",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<bool>(
                name: "isOpen",
                table: "Bar",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AddColumn<bool>(
                name: "Visited",
                table: "Bar",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "Restaurant");

            migrationBuilder.DropColumn(
                name: "isOpen",
                table: "Restaurant");

            migrationBuilder.DropColumn(
                name: "Visited",
                table: "Bar");

            migrationBuilder.AlterColumn<bool>(
                name: "isOpen",
                table: "Bar",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);
        }
    }
}
