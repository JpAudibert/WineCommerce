using Microsoft.AspNetCore.Mvc;
using WineCommerce.Domain.Products.Infrastructure;

namespace WineCommerce.HttpApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : Controller
{
    private readonly ProductQueries _productQueries;

    public ProductsController(ProductQueries productQueries)
    {
        _productQueries = productQueries;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        return Ok(await _productQueries.GetProducts());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProducts(int id)
    {
        return Ok(await _productQueries.GetProduct(id));
    }
}

