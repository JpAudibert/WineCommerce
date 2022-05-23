using Microsoft.AspNetCore.Mvc;

namespace WineCommerce.HttpApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : Controller
{
    [HttpGet]
    public Task<IActionResult> GetProducts()
    {

    }
}

