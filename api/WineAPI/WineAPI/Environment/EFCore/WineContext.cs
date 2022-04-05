using Microsoft.EntityFrameworkCore;
using WineAPI.Domain.Items;
using WineAPI.Domain.Items.Maps;

namespace WineAPI.Environment.EFCore;

public class WineContext : DbContext
{
    public WineContext()
    { }

    public WineContext(DbContextOptions options) : base(options)
    { }

    public DbSet<Item> Items { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new ItemMap());
    }

}
