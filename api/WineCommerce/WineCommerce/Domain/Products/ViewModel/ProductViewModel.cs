namespace WineCommerce.Domain.Products.ViewModel;

public class ProductViewModel
{
    public string? Name { get; }
    public double Price { get; }
    public string? Description { get; }
    public string? Image { get; }

    public ProductViewModel(string name, double price, string description, string image)
    {
        Name = name;
        Price = price;
        Description = description;
        Image = image;
    }

    public ProductViewModel()
    { }
}
