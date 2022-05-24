using Microsoft.Extensions.Configuration;

namespace WineCommerce.Domain;

public abstract class BaseConnection
{
    public string ConnectionString { get; }

    protected BaseConnection(IConfiguration configuration)
    {
        ConnectionString = configuration.GetConnectionString("Default");
    }
}
