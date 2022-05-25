using CSharpFunctionalExtensions;
using WineCommerce.Domain.Login.Commands;

namespace WineCommerce.HttpApi.Models;

public class LoginInputModel
{
    public string Email { get; }
    public string Password { get; }

    public LoginInputModel(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public Result<LoginCommand> CreateCommand()
    {
        return LoginCommand.Create(Email, Password);
    }
}
