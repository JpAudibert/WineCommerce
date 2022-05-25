namespace WineCommerce.Domain.Login.Infrastructure.ViewModels;

public class LoginViewModel
{
    public string Name { get; }

    public LoginViewModel(string name)
    {
        Name = name;
    }
}
