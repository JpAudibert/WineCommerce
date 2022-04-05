using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WineAPI.Domain.Items.Maps;

public class ItemMap : IEntityTypeConfiguration<Item>
{
    public void Configure(EntityTypeBuilder<Item> builder)
    {
        builder.ToTable("items");
        builder.HasKey(prop => prop.Id);

        builder.Property(prop => prop.Name).HasColumnType("varchar(60)");
        builder.Property(prop => prop.Description).HasColumnType("varchar(100)");
        builder.Property(prop => prop.Description).HasColumnType("varchar(100)");
        builder.Property(prop => prop.Price).HasColumnType("decimal(12,2)");
        builder.Property(prop => prop.Image).HasColumnType("bytea");

        builder.Property<DateTime>("CreatedAt").ValueGeneratedOnAdd().HasDefaultValueSql("now()");
        builder.Property<DateTime>("UpdatedAt").ValueGeneratedOnAddOrUpdate().HasDefaultValueSql("now()");
    }
}
