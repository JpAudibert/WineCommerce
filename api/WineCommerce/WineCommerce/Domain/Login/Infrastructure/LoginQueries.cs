using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WineCommerce.Domain.Login.Infrastructure.ViewModels;

namespace WineCommerce.Domain.Login.Infrastructure;

public class LoginQueries: BaseConnection
{
    public LoginQueries(IConfiguration configuration) : base(configuration)
    {
    }

    public async Task<LoginViewModel> GetLogin(string email, string password)
    {
        using NpgsqlConnection connection = new(ConnectionString);

        const string sql = @"SELECT name 
                              FROM users
                             WHERE email = @email
                               AND password = md5(@password) ";

        return await connection.QueryFirstOrDefaultAsync<LoginViewModel>(sql, param: new { email, password });
    }
}
