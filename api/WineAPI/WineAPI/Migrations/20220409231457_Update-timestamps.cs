using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WineAPI.Migrations
{
    public partial class Updatetimestamps : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "updatedAt",
                table: "items",
                newName: "updated_at");

            migrationBuilder.RenameColumn(
                name: "createdAt",
                table: "items",
                newName: "created_at");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "updated_at",
                table: "items",
                newName: "updatedAt");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "items",
                newName: "createdAt");
        }
    }
}
