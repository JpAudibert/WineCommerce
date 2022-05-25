using CSharpFunctionalExtensions;
using WineCommerce.Domain.Login.Commands;
using WineCommerce.Domain.Login.Infrastructure;
using WineCommerce.Domain.Login.Infrastructure.ViewModels;

namespace WineCommerce.Domain.Login.Handlers;

public class LoginHandler
{
    private readonly LoginQueries _loginQueries;

    public LoginHandler(LoginQueries loginQueries)
    {
        _loginQueries = loginQueries;
    }

    public async Task<Result<LoginViewModel>> Handle(LoginCommand login)
    {
        var username = await _loginQueries.GetLogin(login.Email, login.Password);

        if (username is null)
            return Result.Failure<LoginViewModel>("Login failed.");

        return Result.Success(username);
    }
}
