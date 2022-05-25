using CSharpFunctionalExtensions;
using System.Text.RegularExpressions;

namespace WineCommerce.Domain.Login.Commands;

public class LoginCommand
{
    public string Email { get; }
    public string Password { get; }

    public LoginCommand(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public static Result<LoginCommand> Create(string email, string password)
    {
        if (string.IsNullOrWhiteSpace(email) || string.IsNullOrEmpty(password))
            return Result.Failure<LoginCommand>("Invalid data.");

        if(!Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$"))
            return Result.Failure<LoginCommand>("Invalid email.");

        if (password.Length < 5)
            return Result.Failure<LoginCommand>("Invalid password.");

        return Result.Success(new LoginCommand(email, password));
    }
}
