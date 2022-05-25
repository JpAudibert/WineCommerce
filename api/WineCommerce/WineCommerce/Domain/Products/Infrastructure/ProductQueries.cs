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

    public async Task<IEnumerable<ProductViewModel>> GetProducts(int limit = 20, int page = 1)
    {
        using NpgsqlConnection connection = new(ConnectionString);

        int skip = (page - 1) * limit;

        const string sql = @" SELECT name, 
	                                 price, 
	                                 description, 
	                                 image
                                FROM products
                               ORDER BY id
                               LIMIT @limit
                              OFFSET @skip ";

        return await connection.QueryAsync<ProductViewModel>(sql, param: new { limit, skip });
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
