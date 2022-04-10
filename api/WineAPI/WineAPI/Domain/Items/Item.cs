namespace WineAPI.Domain.Items;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public string Image { get; set; }

    public Item()
    { }

    public Item(int id, string name, string description, double price, string image )
    {
        Id = id;
        Name = name;
        Description = description;
        Price = price;
        Image = image;
    }
}
