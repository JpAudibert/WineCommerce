using Npgsql;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WineCommerce.Domain;
using Microsoft.Extensions.Configuration;
using WineCommerce.Domain.Products.ViewModel;

namespace WineCommerce.Domain.Products.Infrastructure;

public class ProductQueries : BaseConnection
{
    public ProductQueries(IConfiguration configuration) : base(configuration)
    { }

    public async Task<IEnumerable<ProductViewModel>> GetProducts()
    {
        using NpgsqlConnection connection = new(ConnectionString);

        const string sql = @" SELECT name, 
	                                 price, 
	                                 description, 
	                                 image
                                FROM products
                               ORDER BY id 
                               LIMIT 30";

        return await connection.QueryAsync<ProductViewModel>(sql);
    }

    public async Task<ProductViewModel> GetProduct(int id)
    {
        using NpgsqlConnection connection = new(ConnectionString);

        const string sql = @" SELECT name, 
	                                 price, 
	                                 description, 
	                                 image
                                FROM products
                               WHERE ID = @id";

        return await connection.QueryFirstOrDefaultAsync<ProductViewModel>(sql, param: new { id });
    }
}
