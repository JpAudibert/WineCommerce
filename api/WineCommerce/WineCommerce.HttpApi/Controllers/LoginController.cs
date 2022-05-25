using Microsoft.AspNetCore.Mvc;
using WineCommerce.Domain.Login.Handlers;
using WineCommerce.HttpApi.Models;

namespace WineCommerce.HttpApi.Controllers;

[ApiController]
[Route("[controller]")]
public class LoginController : Controller
{
    private readonly LoginHandler _loginHandler;

    public LoginController(LoginHandler loginHandler)
    {
        _loginHandler = loginHandler;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody] LoginInputModel login)
    {
        var command = login.CreateCommand();

        if (command.IsFailure)
        {
            return BadRequest(new { error = command.Error });
        }

        var result = await _loginHandler.Handle(command.Value);

        if (result.IsFailure)
        {
            return BadRequest(new { error = result.Error });
        }
        return Ok(result.Value);
    }
}
