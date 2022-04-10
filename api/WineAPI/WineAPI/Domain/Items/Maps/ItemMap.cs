using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WineAPI.Domain.Items.Maps;

public class ItemMap : IEntityTypeConfiguration<Item>
{
    public void Configure(EntityTypeBuilder<Item> builder)
    {
        builder.ToTable("items");
        builder.HasKey(prop => prop.Id);

        builder.Property(prop => prop.Id).HasColumnName("id");
        builder.Property(prop => prop.Name).HasColumnName("name").HasColumnType("varchar(60)");
        builder.Property(prop => prop.Description).HasColumnName("description").HasColumnType("varchar(100)");
        builder.Property(prop => prop.Price).HasColumnName("price").HasColumnType("decimal(12,2)");
        builder.Property(prop => prop.Image).HasColumnName("image").HasColumnType("text");

        builder.Property<DateTime>("created_at").ValueGeneratedOnAdd().HasDefaultValueSql("now()");
        builder.Property<DateTime>("updated_at").ValueGeneratedOnAddOrUpdate().HasDefaultValueSql("now()");
    }
}
